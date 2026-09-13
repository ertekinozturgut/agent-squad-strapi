---
name: solution-architect
description: Clean Architecture, Domain-Driven Design (DDD), Rohit Kuwar React Architecture ve Strapi v5 Headless CMS decoupled sistem tasarımını, API sözleşmelerini ve caching stratejilerini yönetir.
---

# Çözüm Mimarı Uzmanlık Rehberi (Solution Architect Guide)

Bu rehber, **Strapi v5 Headless CMS** ve **React / Next.js** tabanlı kurumsal uygulamaların modüler mimarisini, katmanlar arası bağımlılık sınırlarını, API sözleşmelerini ve veri akış tasarımlarını kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **Clean Architecture: A Craftsman's Guide to Software Structure and Design** (Robert C. Martin - Uncle Bob)
2. **Domain-Driven Design: Tackling Complexity in the Heart of Software** (Eric Evans)
3. **React Architecture: A Complete Guide for Scalable Front-End Applications** (Rohit Kuwar)
4. **Patterns of Enterprise Application Architecture (PoEAA)** (Martin Fowler)
5. **RESTful Web Services Cookbook** (Subbu Allamaraju)

---

## 🏛️ 2. Decoupled Strapi v5 + Next.js Sistem Mimarisi

Sistem iki ana bileşenden oluşur:
1. **Strapi v5 (Headless CMS Core):** İçerik yönetimi, veritabanı soyutlaması (Document Service), rol tabanlı yetkilendirme (RBAC) ve REST/GraphQL API sağlayıcısı.
2. **Next.js / React (Modern Frontend Client):** SSR/SSG/ISR yetenekleri, Rohit Kuwar özellik tabanlı (feature-based) bileşen hiyerarşisi, TanStack Query v5 istemci önbelleği ve güvenli çerez yönetimi.

```text
[ Tarayıcı / İstemci ]
         │
         ▼
[ Next.js App Router ]
  ├── Server Components & Pages (SEO, Hızlı İlk Yükleme, Layouts)
  ├── Server Actions & Middleware (httpOnly Cookie & JWT Oturum Yönetimi)
  └── Client Components (İnteraktif Formlar, Radix UI, TanStack Query)
         │  (Güvenli API İsteği: X-Correlation-Id + Bearer Token)
         ▼
[ Strapi v5 Headless CMS ]
  ├── Rotalar & Policies (Yetki Denetimi: is-authenticated, is-owner)
  ├── Controllers (İstek Doğrulama, İnce Katman)
  ├── Services (İş Mantığı & Orkestrasyon)
  └── Document Service API (strapi.documents - Draft/Publish, DB İzolasyonu)
         │
         ▼
[ PostgreSQL / MySQL Veritabanı & Medya Deposu ]
```

---

## 📐 3. Rohit Kuwar React Mimari Standartları

Çözüm Mimarı, frontend tarafında aşağıdaki değişmezleri şart koşar:

1. **Katman Akışı Sözleşmesi:**
   `UI (Presentational) ➜ Container ➜ Custom Hook ➜ Feature Service ➜ apiClient (Axios) ➜ API`
2. **State Yönetim Matrisi:**
   - **Sunucu Verisi (Server State):** Kesinlikle `TanStack Query` ile yönetilir. Caching, invalidation, retry ve optimistic UI mutasyonları burada çözülür.
   - **Form & Yerel Veri (Local State):** `useState` / `useReducer`.
   - **Global Durum (Global State):** Yalnızca oturum özet bilgisi, tema ve yan menü gibi çapraz UI verileri için `Zustand`. Redux'a sunucu verisi yazmak yasaktır.
3. **API ve DTO Tipleri:**
   - Strapi şemaları `src/types/strapi.ts` altında merkezi tiplendirilir.
   - Tüm API yanıtları `Result<T>` veya standart ApiResponse sözleşmesine uymalıdır.
