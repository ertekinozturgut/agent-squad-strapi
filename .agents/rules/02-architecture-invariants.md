# 🏛️ Kural 02: Mimari Değişmezleri (Architecture Invariants)

Bu anayasal kural, **Rohit Kuwar React Architecture** ve **Strapi v5 Headless CMS** katman ayrımını, veri akış yönünü ve bağımlılık sınırlarını tanımlar.

---

## 1. 🧬 Modern React Veri Akışı ve Katman Hiyerarşisi

Herhangi bir React veya Next.js bileşeni, doğrudan API veya ağ çağrısı yapamaz. Veri akışı daima şu tek yönlü boru hattını izlemelidir:

```text
+-------------------------------------------------------+
|                       UI LAYER                        |
|  - Presentation Components (Dumb / Saf UI Props)     |
|  - Container Components (Smart / Veri Bağlayıcı)     |
+---------------------------+---------------------------+
                            |
                            ▼
+-------------------------------------------------------+
|                      HOOKS LAYER                      |
|  - Custom React Hooks (useUser, useAuth, useProducts) |
|  - TanStack Query v5 Hook'ları (useQuery, useMutation)|
+---------------------------+---------------------------+
                            |
                            ▼
+-------------------------------------------------------+
|                     SERVICE LAYER                     |
|  - Feature Services (authService.ts, orderService.ts) |
|  - Centralized Axios Client (apiClient.ts)            |
|  - Request & Response Interceptors (Token / Error)    |
+---------------------------+---------------------------+
                            |
                            ▼
+-------------------------------------------------------+
|                       API LAYER                       |
|  - Strapi v5 REST & GraphQL Endpoints                 |
|  - Next.js Server Actions & Route Handlers            |
+---------------------------+---------------------------+
                            |
                            ▼
+-------------------------------------------------------+
|                   CACHE & STATE LAYER                 |
|  - TanStack Query Cache (Otomatik Refetch, Stale-Time)|
|  - Local Component State (useState / useReducer)      |
|  - Global State (Sadece gerekirse: Zustand / Context) |
+-------------------------------------------------------+
```

---

## 2. 📁 Özellik Tabanlı (Feature-Based) Modüler Klasörleme

Uygulama kodları dağınık klasörler yerine ilgili işlevsel alan altında (Vertical Slice) gruplanır:

```text
src/
├── assets/             # Görseller, ikonlar, genel fontlar
├── components/         # Tüm uygulamada paylaşılan genel UI bileşenleri (Button, Modal, Input)
├── features/           # Özellik bazlı dikey dilimler
│   ├── auth/
│   │   ├── components/ # Auth'a özel formlar ve kartlar (LoginForm.tsx, RegisterForm.tsx)
│   │   ├── hooks/      # useAuth.ts, useLoginMutation.ts
│   │   ├── services/   # authService.ts (API istekleri)
│   │   ├── types/      # auth.types.ts
│   │   └── index.ts    # Dışa açılan genel barrel export
│   └── products/
├── hooks/              # Global genel hook'lar (useDebounce, useLocalStorage, useWindowSize)
├── layouts/            # Ana şablonlar (DashboardLayout, AuthLayout, PublicLayout)
├── services/           # apiClient.ts, errorHandler.ts
├── store/              # Zustand global state dilimleri (Sadece global UI state için)
└── utils/              # Saf yardımcı fonksiyonlar (formatters, validators)
```

### Katı Kurallar:
- **Kural 2.1 (No Direct Cross-Feature Private Import):** Bir feature, başka bir feature'ın içindeki derin dosyalara (`features/orders/components/internal/...`) doğrudan erişemez. Sadece ilgili feature'ın `index.ts` dosyası üzerinden dışa açılmış üyeler kullanılabilir.
- **Kural 2.2 (Component Type Separation):**
  - **Sunum Bileşenleri (Presentational):** Sadece props alır, yan etki (side effect) içermez, DOM ve UI oluşturur.
  - **Konteyner Bileşenleri (Container):** Hook'ları çağırır, veriyi çeker ve sunum bileşenine aktarır.
- **Kural 2.3 (State Karar Kuralı):**
  - Sunucu verisi ➔ **TanStack React Query** (Redux veya Zustand içine taşınmaz!).
  - Form ve toggle durumları ➔ **useState / useReducer** (Yerel State).
  - Yalnızca birden fazla bağımsız modülün ortak ihtiyaç duyduğu kullanıcı oturum özeti veya tema ➔ **Zustand**.

---

## 3. 🛡️ Strapi v5 Katman Değişmezleri

Backend tarafında Strapi v5 kullanılırken katı Clean Architecture prensipleri uygulanır:

1. **İnce Controller (Thin Controller):**
   - Controller'lar yalnızca HTTP isteğini alır, temel DTO doğrulamasını yapar, ilgili `service` fonksiyonunu çağırır ve sonucu standart formatta döner.
   - Controller içinde **kesinlikle doğrudan Knex sorgusu, ham SQL veya karmaşık iş mantığı yazılamaz**.
2. **Document Service API Zorunluluğu:**
   - Strapi v5 ile gelen `strapi.documents('api::x.x')` API'si kullanılmalıdır (eski v4 `entityService` yerine).
   - Draft/Publish durumları ve çoklu dil (i18n) destekleri Document Service üzerinden yönetilmelidir.
3. **Erişim Denetimi (Policies):**
   - Herhangi bir iş mantığından önce yetki kontrolü controller içinde if-else ile değil; rota seviyesindeki `policies` (`is-authenticated`, `has-permission`, `is-owner`) ile yapılmalıdır.
4. **Hata Sözleşmesi:**
   - Beklenmeyen exception fırlatmak yerine, Strapi'nin standart `@strapi/utils.errors` (`ApplicationError`, `NotFoundError`, `ForbiddenError`) sınıfları kullanılmalıdır.
