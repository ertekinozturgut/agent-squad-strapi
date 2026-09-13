# 🤖 Agent Squad Strapi & React

> **Antigravity AI IDE için Strapi v5 ve React / Next.js 8 Kişilik Otonom Yazılım Geliştirme Squad'ı**  
> Özellik Tabanlı (Feature-Based) Ölçeklenebilir React Mimarisi, Strapi v5 Document Service API, Dikey Modülerlik, TanStack Query v5, OWASP ASVS v5.0 Güvenlik Standartları ve Katı El Sıkışma (Handoff) Protokolleri.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Antigravity](https://img.shields.io/badge/Platform-Antigravity%20AI-purple.svg)](https://github.com/ertekinozturgut/agent-squad)
[![Backend: Strapi v5](https://img.shields.io/badge/Backend-Strapi%20v5%20(Document%20Service)-8E75FF.svg)](https://strapi.io/)
[![Frontend: React & Next.js](https://img.shields.io/badge/Frontend-React%2019%20%2F%20Next.js%20App%20Router-black.svg)](https://nextjs.org/)
[![Architecture: Feature-Based React](https://img.shields.io/badge/Architecture-Feature--Based%20React-success.svg)](.agents/rules/02-architecture-invariants.md)
[![Security: OWASP ASVS](https://img.shields.io/badge/Security-OWASP%20ASVS%20Level%202-red.svg)](.agents/rules/03-security-guardrails.md)
[![Quality: Zero Warnings](https://img.shields.io/badge/Quality-Zero%20Lint%20Warnings-brightgreen.svg)](.eslintrc.json)

---

## 🌟 Genel Bakış

**Agent Squad Strapi & React**, tek bir yapay zeka modeline tüm tam yığın (fullstack) yazılım geliştirme sürecini yüklemek yerine; endüstri standardı kanonik literatürlerle donatılmış **8 bağımsız uzman persona**, **5 bağlayıcı anayasal kural**, **Özellik Tabanlı (Feature-Based) Ölçeklenebilir React Mimarisi standartları**, **175 kuraldan oluşan merkezi kural kataloğu (`rules_registry.yaml`)** ve merkezi bir **Görev Durum Makinesi (`tasks.json` + `tasks.schema.json`)** ile çalışan kurumsal seviyede bir yapay zeka yazılım fabrikası mimarisidir.

### Temel Felsefe
- **Uzmanlaşma:** Her persona sadece kendi disiplininde (Analiz, Mimari, Strapi v5 Backend, React/Next.js Frontend, UX, Güvenlik, Test) dünyanın en prestijli literatürlerine (BABOK, Uncle Bob, Evans, OWASP, Meszaros) dayanarak çalışır.
- **Karşılıklı Denetim (Checks & Balances):** Hiçbir geliştirici kendi kodunu onaylayamaz; QA ve Security kapılarından geçmeyen tek bir satır kod ana dala giremez.
- **WIP = 1 (Work-in-Progress):** Çoklu görev karmaşası ve bağlam kaybı engellenir; ekip tek seferde yalnızca tek bir atomik göreve odaklanır.
- **Özellik Tabanlı Dikey Mimari:** Spagetti klasörleme, prop drilling ve bileşen içi kontrolsüz API çağrıları yasaktır. UI, Hooks, Services ve TanStack Query katmanları birbirinden katı sınırlarla ayrılır.

---

## 🔄 Squad El Sıkışma (Handoff) Zinciri ve Durum Makinesi

Tüm görevler `tasks.json` üzerindeki durum makinesi doğrultusunda aşağıdaki 5 aşamalı katı el sıkışma zincirini izler:

```text
       ┌───────────┐
       │  pending  │ (Backlog'da bekleyen atomik görev)
       └─────┬─────┘
             │
             ▼
   [Aşama 1: Kapsam & Analiz] ────────► İş Analisti (BABOK v3 & JTBD & 4 Kademeli Gherkin)
             │
             ▼
   [Aşama 2: Mimari & UX Şartnamesi] ─► Çözüm Mimarı (Clean Arch / Feature-Based React) & UI/UX Tasarımcısı (Radix/Tailwind)
             │
             ├──────────────────────────► 🚪 [DoR Giriş Kapısı Onayı]
             ▼
   [Aşama 3: Geliştirme] ─────────────► Backend Engineer (Strapi v5/TS) & Frontend Engineer (React/Next.js)
             │
             ▼
   [Aşama 4: Kalite & Güvenlik] ──────► QA Tester (Vitest/Playwright) & Security Reviewer (OWASP/ASVS)
             │                          │
             │                          ├────── (Red / Revizyon Gerekli) ─────► ┌───────────────────┐
             │                          │                                       │ changes_requested │
             │                          │                                       └─────────┬─────────┘
             │                          │                                                 │ (Düzeltildi)
             │                          │ ◄───────────────────────────────────────────────┘
             ├──────────────────────────► 🚪 [DoD Çıkış Kapısı Onayı]
             ▼
      ┌───────────┐
      │ completed │ ──► Sıradaki 'pending' göreve geçiş
      └───────────┘
```

---

## 🧠 8 Personanın Uzmanlık Alanları

| Persona | Rol & Uzmanlık | Dayandığı Kanonik Literatür | Temel Çıktı & Sorumluluk |
| :--- | :--- | :--- | :--- |
| **`project-manager`** | Orkestratör & Akış Yöneticisi | PMBOK 7th, Scrum Guide, Accelerate (DORA) | `tasks.json` durum makinesi, WIP=1, revizyon döngüsü (`changes_requested`, `blocked`) ve DoR/DoD kontrolleri. |
| **`business-analyst`** | Değer & Çelişki Dedektörü | BABOK v3, Competing Against Luck (JTBD), Specification by Example | Strapi Content Type modelleri, 4 kademeli Gherkin kabul kriterleri (`Happy`, `Validation`, `Conflict`, `Security`) ve Veri Sözlüğü. |
| **`solution-architect`** | Clean Architecture & Decoupled Mimarı | Clean Architecture (Uncle Bob), DDD (Evans), Feature-Sliced Architecture | Strapi v5 + Next.js App Router sözleşmeleri, Caching stratejisi (TanStack Query + Next.js ISR), httpOnly JWT auth mimarisi. |
| **`backend-engineer`** | Strapi v5 & TypeScript Ustası | Clean Code (Uncle Bob), Node.js Design Patterns, Strapi Docs | İnce Controller, Document Service API (`strapi.documents`), Custom Services, Policies (`is-owner`), Lifecycles, sıfır `any`. |
| **`frontend-engineer`** | React & Next.js Mimarı | Component-Driven Architecture, Modern Web Guidance, Vercel Arch Guides | Feature-based klasörleme, Container/Presentational ayrımı, TanStack Query v5 entegrasyonu, özel hook'lar, apiClient interceptors. |
| **`uiux-designer`** | UX & Tasarım Sistemi Yöneticisi | Design of Everyday Things, Refactoring UI, WCAG 2.2 AA | Tailwind CSS tasarım tokenları, Radix UI headless primitifleri, 5 kademeli durum matrisi (`Hover`, `Focus`, `Loading` vb.), sıfır satır içi CSS. |
| **`qa-tester`** | Çift Yönlü Test Avcısı | Meszaros Test Patterns, Testing JS Applications (da Costa) | Vitest + React Testing Library, Mock Service Worker (MSW), Strapi Supertest entegrasyon testleri, Playwright E2E ve Stryker-JS mutasyon testleri. |
| **`security-reviewer`** | Siber Güvenlik & Kalite Denetçisi | OWASP Top 10 (2025), OWASP ASVS v5.0 Level 2, SEI CERT | XSS (sıfır `dangerouslySetInnerHTML`), httpOnly cookie denetimi, secret sızıntı koruması, Strapi RBAC izin denetimi ve Opengrep taraması. |

---

## 🏛️ Özellik Tabanlı (Feature-Based) React Mimarisi Veri Akışı

Frontend mimarisinde dikey dilimleme ve tek yönlü veri akışı esas alınır:

```text
+-----------------------+
|       UI LAYER        |  Bileşenler ve Sayfalar (Presentational / Container)
+-----------+-----------+
            |
            v
+-----------------------+
|      HOOKS LAYER      |  Özel Hook'lar (useAuth, useProducts, useDebounce)
+-----------+-----------+
            |
            v
+-----------------------+
|     SERVICE LAYER     |  API İstekleri, İş Mantığı (authService.ts, apiClient.ts)
+-----------+-----------+
            |
            v
+-----------------------+
|      DATA LAYER       |  Önbellek & Durum (TanStack React Query Cache / Zustand)
+-----------------------+
```

### 🧬 Dikey Dilimleme Klasör Yapısı
```text
src/ (veya frontend/src/)
├── assets/
├── components/         # Genel yeniden kullanılabilir atomik bileşenler (Button, Input, Modal)
├── features/           # İşlevsel dikey dilimler
│   ├── auth/
│   │   ├── components/ # LoginForm.tsx, RegisterForm.tsx
│   │   ├── hooks/      # useAuth.ts, useLoginMutation.ts
│   │   ├── services/   # authService.ts (apiClient çağrıları)
│   │   ├── types/      # auth.types.ts
│   │   └── index.ts    # Dış dünyaya açılan tek kapı (Public Barrel)
│   └── products/
├── hooks/              # Global genel yardımcı hook'lar (useDebounce, useLocalStorage)
├── layouts/            # DashboardLayout, AuthLayout
├── services/           # Merkezi apiClient.ts (Axios + Token/Hata Interceptor)
├── store/              # Sadece global UI state için Zustand dilimleri
└── utils/              # Saf yardımcı fonksiyonlar
```

---

## 📜 5 Bağlayıcı Anayasa Kuralı (`.agents/rules/`)

1. **`01-squad-handoff-protocol.md`:** Görev döngüsü, rol geçişleri, DoR/DoD kapıları, `changes_requested` revizyon mekanizması ve WIP=1 akış anayasası.
2. **`02-architecture-invariants.md`:** Özellik tabanlı React katmanları, dikey dilimleme, ince Strapi controller kuralı ve Document Service API zorunluluğu.
3. **`03-security-guardrails.md`:** Sıfır `dangerouslySetInnerHTML`, httpOnly cookie token zorunluluğu, secret sızıntı koruması ve Strapi RBAC politikaları.
4. **`04-ui-design-invariants.md`:** Sıfır satır içi (inline) CSS, Tailwind CSS token zorunluluğu, WCAG 2.2 AA kontrastı ve 5 zorunlu bileşen durumu.
5. **`05-backend-development-clean-code-standards.md`:** Fonksiyon yönetimi (max 25 satır, max 3 parametre, guard clauses), dosya kapsamı (max 300 satır), TypeScript katı mod (sıfır `any`).

---

## 🛡️ Doğrudan Kod Kontrol Araçları (Zero-Script Tooling)

Agent Squad Strapi & React, harici derleme scriptlerine ihtiyaç duymadan doğrudan endüstri standardı kod kontrol araçlarına bağlanmıştır:

1. **`dependency-cruiser` (Mimari Katman Doğrulayıcı):**
   ```bash
   npm run depcruise:check
   ```
   UI bileşenlerinin servisleri doğrudan çağırmasını veya feature'lar arası izinsiz dikey import yapılmasını engeller (`.dependency-cruiser.js`).

2. **`Opengrep` (OWASP ASVS Güvenlik Motoru):**
   ```bash
   npm run security:scan
   ```
   XSS, güvensiz çerez, secret sızıntısı ve ham SQL enjeksiyon açıklarını doğrudan tarar (`.agents/opengrep/strapi-react-rules.yaml`).

3. **`ESLint & TypeScript Strict` (Sıfır Hata & Sıfır Uyarı):**
   ```bash
   npm run lint
   npm run typecheck
   ```
   `@typescript-eslint/no-explicit-any`, React Hooks kuralları ve `jsx-a11y` kontrolleri (`.eslintrc.json`).

4. **`Stryker-JS` (Mutasyon Testi):**
   ```bash
   npm run test:mutation
   ```
   Değiştirilen dosyalarda hayatta kalan mutant sayısının 0 olduğunu doğrular (`stryker.config.json`).

5. **`Standards Traceability Matrix`:**
   175 kuralın OWASP ASVS v5.0, Top 10, CWE, ISO 25010 ve WCAG standartlarına tam eşleme raporu: [`docs/TRACEABILITY_MATRIX.md`](docs/TRACEABILITY_MATRIX.md).

---

## 🚀 Projelerinizde Nasıl Kullanılır?

### Yöntem A: Proje Seviyesinde Kullanım (Workspace Root)
Bu depodaki `.agents/` klasörünü ve görev şablonlarını hedef projenizin kök dizinine kopyalayın:
```bash
cp -r .agents/ ./hedef-projeniz/.agents/
cp tasks.template.json ./hedef-projeniz/tasks.json
cp tasks.schema.json ./hedef-projeniz/tasks.schema.json
cp .dependency-cruiser.js .eslintrc.json stryker.config.json ./hedef-projeniz/
```

### Yöntem B: Global Antigravity Kullanımı (Tüm Projelerde Aktif)
Personaları ve kuralları tüm Antigravity workspace'lerinde evrensel kılmak için doğrudan global konfigürasyon köküne kopyalayabilirsiniz:
```bash
mkdir -p ~/.gemini/config/skills ~/.gemini/config/rules
cp -r .agents/skills/* ~/.gemini/config/skills/
cp -r .agents/rules/* ~/.gemini/config/rules/
```

### Geliştirmeye Başlama
Antigravity AI IDE projenizi açtığında:
- `.agents/rules/` altındaki anayasal kuralları arka planda sürekli aktif tutar.
- Her görev için 8 uzman personanın el kitaplarını (`.agents/skills/`) bağlama dahil eder.
- Görevler `tasks.json` üzerinde durum makinesine uygun olarak otonom ve hatasız ilerler.
- Kalite kontrolleri doğrudan `npm run lint`, `npm run depcruise:check` ve `npm run security:scan` ile icra edilir.
