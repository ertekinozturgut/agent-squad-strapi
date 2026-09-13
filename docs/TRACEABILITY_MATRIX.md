# 📊 Standart İzlenebilirlik Matrisi (Standards Traceability Matrix)

> **Agent Squad Strapi & React** için OWASP ASVS v5.0, Top 10, CWE, ISO 25010 ve WCAG 2.2 standartları eşleme raporu.

## 📈 İstatistikler
- **Toplam Kural Sayısı:** 175
- **Şiddet Seviyeleri:** S1 (Build Kırar): **83** | S2 (PR Bloklar): **81** | S3 (Uyarı): **11**
- **Denetim Motoru Dağılımı:**
  - `depcruise`: 8 kural
  - `eslint`: 99 kural
  - `opengrep`: 22 kural
  - `process`: 43 kural
  - `stryker`: 3 kural

---

## 📋 İzlenebilirlik Tablosu

| Standart Ailesi | Madde / Gereksinim | Kural Kodu | Şiddet | Denetçi | Uygulayan Araç | Kural Başlığı |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| OWASP ASVS v5.0 | `V15` | `R-ARCH-001` | **S1** | `depcruise` | `depcruise.no-ui-direct-service-call` | UI bileşeni doğrudan API veya ağ servisini çağıramaz (Hooks üzerinden geçmelidir) |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-001` | **S1** | `depcruise` | `depcruise.no-ui-direct-service-call` | UI bileşeni doğrudan API veya ağ servisini çağıramaz (Hooks üzerinden geçmelidir) |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-002` | **S1** | `depcruise` | `depcruise.no-cross-feature-private-import` | Feature'lar arası izinsiz dikey iç import yasaktır (Sadece public barrel index.ts) |
| OWASP ASVS v5.0 | `V15` | `R-ARCH-003` | **S1** | `depcruise` | `depcruise.no-direct-db-in-strapi-controller` | Strapi Controller katmanı doğrudan Knex veya raw DB çağıramaz |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-003` | **S1** | `depcruise` | `depcruise.no-direct-db-in-strapi-controller` | Strapi Controller katmanı doğrudan Knex veya raw DB çağıramaz |
| ISO/IEC 25010:2023 | `Maintainability/Reusability` | `R-ARCH-004` | **S2** | `eslint` | `eslint.react-pure-presentational` | Sunum (Presentational) bileşenleri yan etki veya iş mantığı içeremez |
| ISO/IEC 25010:2023 | `Maintainability/Analysability` | `R-ARCH-005` | **S1** | `depcruise` | `depcruise.no-circular-dependencies` | Döngüsel bağımlılık (circular dependency) kesinlikle yasaktır |
| ISO/IEC 25010:2023 | `Performance/ResourceUtilization` | `R-ARCH-006` | **S2** | `process` | `architect.state-review` | Global state yalnızca oturum ve UI teması gibi ortak veriler için kullanılır |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-007` | **S2** | `depcruise` | `depcruise.feature-folder-structure` | Her feature kendi izole components, hooks, services ve types klasörlerine sahip olmalıdır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-ARCH-008` | **S1** | `eslint` | `eslint.next-no-client-hooks-in-server` | Next.js Server Component içinde istemci hook'ları (useState, useEffect) kullanılamaz |
| OWASP ASVS v5.0 | `V14` | `R-ARCH-009` | **S1** | `depcruise` | `depcruise.no-server-secret-in-client` | Next.js Client Component içine sunucu sırları import edilemez |
| MITRE CWE | `CWE-200` | `R-ARCH-009` | **S1** | `depcruise` | `depcruise.no-server-secret-in-client` | Next.js Client Component içine sunucu sırları import edilemez |
| OWASP ASVS v5.0 | `V13` | `R-ARCH-010` | **S1** | `depcruise` | `depcruise.use-central-api-client` | Tüm API istekleri merkezi apiClient (Axios interceptor) üzerinden geçmelidir |
| ISO/IEC 25010:2023 | `Security/Confidentiality` | `R-ARCH-010` | **S1** | `depcruise` | `depcruise.use-central-api-client` | Tüm API istekleri merkezi apiClient (Axios interceptor) üzerinden geçmelidir |
| OWASP ASVS v5.0 | `V4` | `R-ARCH-011` | **S1** | `process` | `architect.auth-guard-check` | React Router veya Next.js korumalı rotalarda AuthGuard bulunmalıdır |
| MITRE CWE | `CWE-306` | `R-ARCH-011` | **S1** | `process` | `architect.auth-guard-check` | React Router veya Next.js korumalı rotalarda AuthGuard bulunmalıdır |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-ARCH-012` | **S1** | `depcruise` | `depcruise.pure-service-layer` | Servis katmanı React veya DOM bağımlılığı taşıyamaz |
| ISO/IEC 25010:2023 | `Reliability/FaultTolerance` | `R-ARCH-013` | **S2** | `eslint` | `eslint.react-error-boundary` | Hata sınırları (ErrorBoundary) her ana rota ve kritik özellik çevresinde bulunmalıdır |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-014` | **S1** | `eslint` | `eslint.strapi-document-service-only` | Strapi v5 modellerinde Document Service API zorunludur |
| ISO/IEC 25010:2023 | `Maintainability/Reusability` | `R-ARCH-015` | **S2** | `eslint` | `eslint.strapi-clean-service-params` | Strapi servisleri controller istek parametrelerine (ctx) doğrudan bağlanamaz |
| ISO/IEC 25010:2023 | `Maintainability/Analysability` | `R-ARCH-016` | **S2** | `eslint` | `eslint.react-hook-form-zod` | Form alanları yönetimi için standart doğrulama kütüphanesi (Zod/React Hook Form) kullanılmalıdır |
| ISO/IEC 25010:2023 | `Usability/Recognisability` | `R-ARCH-017` | **S2** | `process` | `architect.seo-metadata-review` | Sayfa seviyesinde SEO meta etiketleri ve OpenGraph tanımları eksiksiz olmalıdır |
| ISO/IEC 25010:2023 | `Performance/ResourceUtilization` | `R-ARCH-018` | **S3** | `eslint` | `eslint.promise-abort-support` | Tüm async/await çağrılarında iptal desteği (AbortController) desteklenmelidir |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-ARCH-019` | **S2** | `eslint` | `eslint.standard-api-response` | Tüm API yanıtları Result veya ApiResponse standardına sarılmalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-ARCH-020` | **S3** | `process` | `ui.asset-optimization` | Statik varlıklar (resimler/ikonlar) public veya assets dizininde optimize saklanmalıdır |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-021` | **S2** | `eslint` | `eslint.query-key-factory` | TanStack Query queryKey'leri merkezi fabrika (Query Key Factory) ile yönetilmelidir |
| OWASP ASVS v5.0 | `V4` | `R-ARCH-022` | **S1** | `eslint` | `eslint.strapi-custom-route-policy` | Strapi özel rotaları (Custom Routes) policies tanımlarına sahip olmalıdır |
| OWASP API Top 10:2023 | `API1:2023` | `R-ARCH-022` | **S1** | `eslint` | `eslint.strapi-custom-route-policy` | Strapi özel rotaları (Custom Routes) policies tanımlarına sahip olmalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-ARCH-023` | **S2** | `eslint` | `eslint.react-usememo-heavy-calc` | Bileşen render'ı sırasında ağır hesaplama doğrudan yapılamaz (useMemo zorunlu) |
| ISO/IEC 25010:2023 | `Performance/ResourceUtilization` | `R-ARCH-024` | **S3** | `eslint` | `eslint.query-explicit-staletime` | Önbellek süresi (staleTime) her feature ihtiyacına göre açıkça belirtilmelidir |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-ARCH-025` | **S1** | `process` | `architect.schema-migration-review` | Veri tabanı migration ve şema değişiklikleri versiyon kontrolünde saklanmalıdır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-001` | **S1** | `eslint` | `eslint.react-hooks/rules-of-hooks` | React Hooks kuralları: Hook'lar sadece en üst seviyede çağrılabilir |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-002` | **S2** | `eslint` | `eslint.react-hooks/exhaustive-deps` | useEffect bağımlılık dizisi (exhaustive-deps) eksiksiz olmalıdır |
| ISO/IEC 25010:2023 | `Maintainability/Analysability` | `R-REACT-003` | **S1** | `eslint` | `eslint.@typescript-eslint/no-explicit-any` | Bileşen props tipleri açıkça tanımlanmalı, any kullanılmamalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-REACT-004` | **S2** | `eslint` | `opengrep.r-react-no-array-index-key` | Liste döngülerinde index key olarak kullanılamaz, kararlı id şarttır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-005` | **S2** | `eslint` | `eslint.react-functional-set-state` | State güncellemelerinde önceki duruma bağımlılık varsa fonksiyonel update şarttır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-REACT-006` | **S2** | `eslint` | `eslint.react-no-derived-state-effect` | Gereksiz useEffect kullanımından kaçınılmalı, türetilmiş state hesaplanmalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-REACT-007` | **S3** | `eslint` | `eslint.react-usecallback-handlers` | Olay işleyiciler (Event Handlers) useCallback ile stabilize edilmelidir |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-008` | **S2** | `eslint` | `eslint.react-no-render-in-ref` | Ref nesneleri render akışını tetiklemek için kullanılamaz |
| ISO/IEC 25010:2023 | `Performance/ResourceUtilization` | `R-REACT-009` | **S2** | `eslint` | `eslint.react-memoize-context-value` | Context Provider bileşenleri value nesnesini useMemo ile sarmalamalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-REACT-010` | **S2** | `eslint` | `eslint.react-lazy-suspense` | Büyük bileşen ağaçlarında lazy loading ve Suspense kullanılmalıdır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-011` | **S1** | `eslint` | `eslint.react-pure-render` | React bileşen fonksiyonları saf olmalı, render anında yan etki üretmemelidir |
| ISO/IEC 25010:2023 | `Maintainability/Readability` | `R-REACT-012` | **S3** | `eslint` | `eslint.react-simple-jsx` | JSX içinde karmaşık mantık yerine ayrı hesaplanmış değişkenler kullanılmalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-REACT-013` | **S3** | `eslint` | `eslint.react-jsx-fragments` | Fragment (<>...</>) gereksiz div sarmalamalarının yerine tercih edilmelidir |
| ISO/IEC 25010:2023 | `Maintainability/Analysability` | `R-REACT-014` | **S2** | `eslint` | `eslint.naming-convention` | Bileşen isimleri PascalCase, custom hook isimleri useCamelCase olmalıdır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-015` | **S2** | `eslint` | `eslint.react-form-prevent-default` | Form submit olaylarında e.preventDefault() çağrısı unutulmamalıdır |
| ISO/IEC 25010:2023 | `Reliability/FaultTolerance` | `R-REACT-016` | **S1** | `eslint` | `eslint.react-effect-cleanup` | Unmount olan bileşenlerde bellek sızıntısını önlemek için cleanup fonksiyonu yazılmalıdır |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-REACT-017` | **S2** | `eslint` | `eslint.react-ssr-safe-dom-access` | Bileşenler içinde doğrudan window veya document erişimi useEffect içinde izole edilmelidir |
| ISO/IEC 25010:2023 | `Maintainability/Readability` | `R-REACT-018` | **S3** | `eslint` | `eslint.react-explicit-boolean-props` | Boolean props geçişlerinde açık değer verilmelidir (isLoading={true}) |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-REACT-019` | **S2** | `eslint` | `eslint.react-single-purpose-hooks` | Custom hook'lar tek bir iş yapmalı, tanrı hook (god-hook) olmamalıdır |
| W3C WCAG 2.2 AA | `WCAG-4.1.2` | `R-REACT-020` | **S2** | `eslint` | `eslint.jsx-a11y/button-has-type` | Tüm interaktif butonlarda erişilebilir aria etiketleri bulunmalıdır |
| W3C WCAG 2.2 AA | `WCAG-1.1.1` | `R-REACT-021` | **S2** | `eslint` | `eslint.jsx-a11y/alt-text` | Resimlerde alt özniteliği zorunludur ve boş kalamaz |
| W3C WCAG 2.2 AA | `WCAG-1.3.1` | `R-REACT-022` | **S2** | `eslint` | `eslint.jsx-a11y/label-has-associated-control` | Form girdilerinde id ve htmlFor bağlantısı eksiksiz kurulmalıdır |
| W3C WCAG 2.2 AA | `WCAG-2.4.2` | `R-REACT-023` | **S3** | `eslint` | `eslint.react-update-title` | Sayfa başlıkları ve rota değişimlerinde document.title güncellenmelidir |
| W3C WCAG 2.2 AA | `WCAG-2.3.3` | `R-REACT-024` | **S2** | `eslint` | `eslint.css-prefers-reduced-motion` | Animasyonlu geçişlerde prefers-reduced-motion desteği sağlanmalıdır |
| ISO/IEC 25010:2023 | `Maintainability/Analysability` | `R-REACT-025` | **S3** | `eslint` | `eslint.react-match-filename` | Bileşen dosya adı ile varsayılan export bileşen adı birebir eşleşmelidir |
| ISO/IEC 25010:2023 | `Security/Confidentiality` | `R-STRAPI-001` | **S2** | `eslint` | `eslint.strapi-explicit-filters` | Strapi Document Service API parametrelerinde filters açıkça belirtilmelidir |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-STRAPI-002` | **S2** | `eslint` | `eslint.strapi-error-idiom` | Strapi controller fonksiyonları try/catch yerine merkezi hata sınıfı fırlatmalıdır |
| OWASP ASVS v5.0 | `V13` | `R-STRAPI-003` | **S1** | `opengrep` | `opengrep.strapi-sanitize-output` | Strapi yanıtlarında hassas alanlar sanitize.contentAPI ile temizlenmelidir |
| MITRE CWE | `CWE-200` | `R-STRAPI-003` | **S1** | `opengrep` | `opengrep.strapi-sanitize-output` | Strapi yanıtlarında hassas alanlar sanitize.contentAPI ile temizlenmelidir |
| OWASP ASVS v5.0 | `V4` | `R-STRAPI-004` | **S1** | `process` | `process` | Strapi API Token scope'ları en az yetki ilkesine (Least Privilege) göre sınırlandırılmalıdır |
| OWASP API Top 10:2023 | `API2:2023` | `R-STRAPI-004` | **S1** | `process` | `process` | Strapi API Token scope'ları en az yetki ilkesine (Least Privilege) göre sınırlandırılmalıdır |
| OWASP ASVS v5.0 | `V13` | `R-STRAPI-005` | **S1** | `eslint` | `eslint.strapi-private-attributes` | Strapi Content-Type şemalarında private: true hassas alanlara uygulanmalıdır |
| OWASP ASVS v5.0 | `V5` | `R-STRAPI-006` | **S1** | `opengrep` | `opengrep.r-strapi-raw-sql-injection` | Strapi servislerinde Knex sorgularında parametreli bağlama zorunludur |
| MITRE CWE | `CWE-89` | `R-STRAPI-006` | **S1** | `opengrep` | `opengrep.r-strapi-raw-sql-injection` | Strapi servislerinde Knex sorgularında parametreli bağlama zorunludur |
| OWASP ASVS v5.0 | `V4` | `R-STRAPI-007` | **S1** | `process` | `process` | Strapi rotalarında auth: false bırakılan endpoint'ler güvenlik incelemesinden geçmelidir |
| ISO/IEC 25010:2023 | `Reliability/FaultTolerance` | `R-STRAPI-008` | **S1** | `eslint` | `eslint.strapi-no-infinite-lifecycle` | Strapi lifecycle hook'larında sonsuz döngü (infinite loop) engellenmelidir |
| OWASP ASVS v5.0 | `V12` | `R-STRAPI-009` | **S1** | `eslint` | `eslint.strapi-mime-type-check` | Strapi dosya yüklemelerinde izinli MIME tipleri katı şekilde kontrol edilmelidir |
| MITRE CWE | `CWE-434` | `R-STRAPI-009` | **S1** | `eslint` | `eslint.strapi-mime-type-check` | Strapi dosya yüklemelerinde izinli MIME tipleri katı şekilde kontrol edilmelidir |
| OWASP ASVS v5.0 | `V12` | `R-STRAPI-010` | **S2** | `process` | `process` | Strapi medya boyutu sınırı (Max Upload Size) yapılandırılmalıdır |
| OWASP ASVS v5.0 | `V14` | `R-STRAPI-011` | **S3** | `process` | `process` | Strapi admin paneli için varsayılan /admin yolu güvenli bir takma adla değiştirilmelidir |
| OWASP ASVS v5.0 | `V14` | `R-STRAPI-012` | **S1** | `eslint` | `eslint.strapi-no-wildcard-cors` | Strapi CORS yapılandırmasında origin: '*' yasaktır, sadece izinli frontend domainleri verilir |
| MITRE CWE | `CWE-942` | `R-STRAPI-012` | **S1** | `eslint` | `eslint.strapi-no-wildcard-cors` | Strapi CORS yapılandırmasında origin: '*' yasaktır, sadece izinli frontend domainleri verilir |
| OWASP ASVS v5.0 | `V2` | `R-STRAPI-013` | **S1** | `process` | `process` | Strapi rate-limit eklentisi auth endpoint'lerinde aktif olmalıdır |
| OWASP API Top 10:2023 | `API4:2023` | `R-STRAPI-013` | **S1** | `process` | `process` | Strapi rate-limit eklentisi auth endpoint'lerinde aktif olmalıdır |
| OWASP ASVS v5.0 | `V14` | `R-STRAPI-014` | **S1** | `eslint` | `eslint.strapi-db-env-credentials` | Strapi veri tabanı bağlantı bilgileri ortam değişkenlerinden (env) okunmalıdır |
| ISO/IEC 25010:2023 | `FunctionalSuitability/Correctness` | `R-STRAPI-015` | **S2** | `eslint` | `eslint.strapi-status-control` | Strapi Document Service create/update işlemlerinde status='published' kontrollü yönetilmelidir |
| ISO/IEC 25010:2023 | `Maintainability/Modularity` | `R-STRAPI-016` | **S2** | `eslint` | `eslint.strapi-extend-core-controller` | Strapi özel controller'ları extendCoreController ile genişletilmelidir |
| ISO/IEC 25010:2023 | `Performance/ResourceUtilization` | `R-STRAPI-017` | **S2** | `eslint` | `eslint.strapi-no-wildcard-populate` | Strapi ilişkisel sorgularda populate: '*' kullanımı sınırlandırılmalı, sadece gereken alanlar çekilmelidir |
| OWASP API Top 10:2023 | `API4:2023` | `R-STRAPI-018` | **S2** | `eslint` | `eslint.strapi-pagination-limits` | Strapi pagination sınırları (pageSize max 100) korunmalıdır |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-STRAPI-019` | **S2** | `process` | `process` | Strapi veri tabanı indexleri sık filtrelenen alanlara (slug, email) eklenmelidir |
| OWASP ASVS v5.0 | `V7` | `R-STRAPI-020` | **S1** | `opengrep` | `opengrep.strapi-mask-pii-logs` | Strapi loglarında şifre, kart no ve token maskelenmelidir |
| KVKK / GDPR | `KVKK-m12` | `R-STRAPI-020` | **S1** | `opengrep` | `opengrep.strapi-mask-pii-logs` | Strapi loglarında şifre, kart no ve token maskelenmelidir |
| OWASP ASVS v5.0 | `V6` | `R-STRAPI-021` | **S1** | `process` | `process` | Strapi JWT secret en az 32 bayt rastgele anahtar içermelidir |
| MITRE CWE | `CWE-326` | `R-STRAPI-021` | **S1** | `process` | `process` | Strapi JWT secret en az 32 bayt rastgele anahtar içermelidir |
| OWASP ASVS v5.0 | `V5` | `R-STRAPI-022` | **S1** | `opengrep` | `opengrep.strapi-email-template-injection` | Strapi e-posta şablonlarında HTML enjeksiyonu önlenmelidir |
| ISO/IEC 25010:2023 | `Reliability/Maturity` | `R-STRAPI-023` | **S2** | `eslint` | `eslint.strapi-cron-timeout` | Strapi cron görevleri bağımsız işlem hatlarında zaman aşımıyla çalışmalıdır |
| OWASP ASVS v5.0 | `V14` | `R-STRAPI-024` | **S1** | `opengrep` | `opengrep.strapi-no-hardcoded-tokens` | Strapi transfer token ve API token anahtarları git'e asla commit edilemez |
| ISO/IEC 25010:2023 | `Reliability/Availability` | `R-STRAPI-025` | **S3** | `process` | `process` | Strapi health-check endpoint'i (/api/_health) izleme sistemine bağlanmalıdır |
| OWASP ASVS v5.0 | `V5` | `R-SEC-001` | **S1** | `opengrep` | `opengrep.r-sec-dangerously-set-inner-html` | React bileşenlerinde dangerouslySetInnerHTML kullanımı yasaktır (DOMPurify hariç) |
| MITRE CWE | `CWE-79` | `R-SEC-001` | **S1** | `opengrep` | `opengrep.r-sec-dangerously-set-inner-html` | React bileşenlerinde dangerouslySetInnerHTML kullanımı yasaktır (DOMPurify hariç) |
| OWASP ASVS v5.0 | `V14` | `R-SEC-002` | **S1** | `opengrep` | `opengrep.r-sec-client-secret-leak` | Next.js ortam değişkenlerinde sır anahtarlar NEXT_PUBLIC_ ön eki alamaz |
| MITRE CWE | `CWE-200` | `R-SEC-002` | **S1** | `opengrep` | `opengrep.r-sec-client-secret-leak` | Next.js ortam değişkenlerinde sır anahtarlar NEXT_PUBLIC_ ön eki alamaz |
| OWASP ASVS v5.0 | `V14` | `R-SEC-003` | **S1** | `eslint` | `eslint.next-security-headers` | Güvenli HTTP başlıkları (CSP, HSTS, X-Frame-Options: DENY) aktif olmalıdır |
| OWASP ASVS v5.0 | `V5` | `R-SEC-004` | **S1** | `eslint` | `eslint.security/detect-eval-with-expression` | eval() ve new Function() kullanımı kod yürütme açığı nedeniyle kesinlikle yasaktır |
| MITRE CWE | `CWE-95` | `R-SEC-004` | **S1** | `eslint` | `eslint.security/detect-eval-with-expression` | eval() ve new Function() kullanımı kod yürütme açığı nedeniyle kesinlikle yasaktır |
| MITRE CWE | `CWE-390` | `R-SEC-005` | **S2** | `opengrep` | `opengrep.r-sec-empty-catch` | Boş catch blokları hataların yutulmasına yol açtığı için yasaktır |
| OWASP ASVS v5.0 | `V6` | `R-SEC-006` | **S1** | `eslint` | `eslint.security/detect-insecure-crypto` | Zayıf şifreleme algoritmaları (MD5, SHA1, DES) kullanılamaz |
| MITRE CWE | `CWE-327` | `R-SEC-006` | **S1** | `eslint` | `eslint.security/detect-insecure-crypto` | Zayıf şifreleme algoritmaları (MD5, SHA1, DES) kullanılamaz |
| MITRE CWE | `CWE-1333` | `R-SEC-007` | **S1** | `eslint` | `eslint.security/detect-unsafe-regex` | ReDoS riski taşıyan savunmasız düzenli ifadeler (Regex) kullanılamaz |
| OWASP ASVS v5.0 | `V4` | `R-SEC-008` | **S1** | `process` | `process` | Cross-Site Request Forgery (CSRF) koruması durum değiştiren tüm rotalarda aktiftir |
| MITRE CWE | `CWE-352` | `R-SEC-008` | **S1** | `process` | `process` | Cross-Site Request Forgery (CSRF) koruması durum değiştiren tüm rotalarda aktiftir |
| OWASP ASVS v5.0 | `V5` | `R-SEC-009` | **S1** | `eslint` | `eslint.next-server-action-validation` | Next.js Server Actions girdileri Zod ile doğrulanmalıdır |
| MITRE CWE | `CWE-20` | `R-SEC-009` | **S1** | `eslint` | `eslint.next-server-action-validation` | Next.js Server Actions girdileri Zod ile doğrulanmalıdır |
| OWASP ASVS v5.0 | `V5` | `R-SEC-010` | **S1** | `eslint` | `eslint.security/detect-ssrf` | Sunucu tarafı istek sahteciliği (SSRF) önlemek için dış URL çağrıları beyaz listeye alınmalıdır |
| MITRE CWE | `CWE-918` | `R-SEC-010` | **S1** | `eslint` | `eslint.security/detect-ssrf` | Sunucu tarafı istek sahteciliği (SSRF) önlemek için dış URL çağrıları beyaz listeye alınmalıdır |
| OWASP ASVS v5.0 | `V3` | `R-SEC-011` | **S1** | `eslint` | `eslint.no-document-cookie` | İstemci tarafında açık metin olarak hassas çerez yazımı yasaktır |
| OWASP ASVS v5.0 | `V5` | `R-SEC-012` | **S2** | `process` | `process` | Tüm form alanlarında XSS payload testleri çalıştırılmalıdır |
| OWASP ASVS v5.0 | `V7` | `R-SEC-013` | **S1** | `eslint` | `eslint.no-stack-trace-leak` | Hata mesajlarında sistem yığın izleri (stack trace) son kullanıcıya gösterilmez |
| MITRE CWE | `CWE-209` | `R-SEC-013` | **S1** | `eslint` | `eslint.no-stack-trace-leak` | Hata mesajlarında sistem yığın izleri (stack trace) son kullanıcıya gösterilmez |
| OWASP ASVS v5.0 | `V14` | `R-SEC-014` | **S2** | `process` | `process` | Subresource Integrity (SRI) harici CDN kaynaklarında zorunludur |
| OWASP ASVS v5.0 | `V12` | `R-SEC-015` | **S2** | `eslint` | `eslint.next-image-remote-patterns` | Next.js image bileşeni remotePatterns ile izinli domainlerle sınırlandırılmalıdır |
| OWASP ASVS v5.0 | `V5` | `R-SEC-016` | **S1** | `eslint` | `eslint.security/detect-insecure-deserialization` | Güvensiz deserialization engellenmelidir |
| MITRE CWE | `CWE-502` | `R-SEC-016` | **S1** | `eslint` | `eslint.security/detect-insecure-deserialization` | Güvensiz deserialization engellenmelidir |
| OWASP ASVS v5.0 | `V5` | `R-SEC-017` | **S2** | `eslint` | `eslint.input-max-length` | Kullanıcı girdi uzunlukları hem ön yüzde hem arka yüzde sınırlandırılmalıdır |
| OWASP ASVS v5.0 | `V14` | `R-SEC-018` | **S1** | `eslint` | `eslint.no-debug-flags` | Geliştirme amaçlı debug bayrakları prodüksiyon dağıtımında kapatılmalıdır |
| OWASP ASVS v5.0 | `V12` | `R-SEC-019` | **S1** | `eslint` | `eslint.security/detect-non-literal-fs-filename` | Yol geçişi (Path Traversal) engellenmelidir |
| MITRE CWE | `CWE-22` | `R-SEC-019` | **S1** | `eslint` | `eslint.security/detect-non-literal-fs-filename` | Yol geçişi (Path Traversal) engellenmelidir |
| ISO/IEC 25010:2023 | `Reliability/Availability` | `R-SEC-020` | **S2** | `eslint` | `eslint.api-require-timeout` | Tüm harici API çağrıları için zaman aşımı (Timeout) tanımlanmalıdır |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-001` | **S1** | `opengrep` | `opengrep.r-auth-jwt-in-localstorage` | JWT tokenları asla localStorage veya sessionStorage'da tutulamaz |
| MITRE CWE | `CWE-384` | `R-AUTH-001` | **S1** | `opengrep` | `opengrep.r-auth-jwt-in-localstorage` | JWT tokenları asla localStorage veya sessionStorage'da tutulamaz |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-002` | **S1** | `eslint` | `eslint.auth-cookie-flags` | Oturum çerezleri httpOnly, Secure ve SameSite=Strict olmalıdır |
| MITRE CWE | `CWE-614` | `R-AUTH-002` | **S1** | `eslint` | `eslint.auth-cookie-flags` | Oturum çerezleri httpOnly, Secure ve SameSite=Strict olmalıdır |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-003` | **S2** | `process` | `process` | Şifreler en az 12 karakter, büyük/küçük harf, rakam ve sembol içermelidir |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-004` | **S1** | `process` | `process` | Başarısız giriş denemelerinde hesap kilitleme veya captcha tetiklenmelidir |
| OWASP Top 10:2025 | `A07:2021` | `R-AUTH-004` | **S1** | `process` | `process` | Başarısız giriş denemelerinde hesap kilitleme veya captcha tetiklenmelidir |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-005` | **S1** | `process` | `process` | Parola sıfırlama tokenları tek kullanımlık ve kısa ömürlü (max 15 dk) olmalıdır |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-006` | **S1** | `process` | `process` | Oturum kapatıldığında hem istemci çerezi hem sunucu oturumu geçersiz kılınmalıdır |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-007` | **S1** | `eslint` | `eslint.jwt-reject-none-algo` | JWT imza algoritması HS256 veya RS256 olmalı, 'none' algoritması reddedilmelidir |
| MITRE CWE | `CWE-347` | `R-AUTH-007` | **S1** | `eslint` | `eslint.jwt-reject-none-algo` | JWT imza algoritması HS256 veya RS256 olmalı, 'none' algoritması reddedilmelidir |
| OWASP ASVS v5.0 | `V4` | `R-AUTH-008` | **S1** | `process` | `process` | Yetki kontrolünde IDOR önlenmeli, kullanıcının yalnızca kendi verisine eriştiği doğrulanmalıdır |
| OWASP API Top 10:2023 | `API1:2023` | `R-AUTH-008` | **S1** | `process` | `process` | Yetki kontrolünde IDOR önlenmeli, kullanıcının yalnızca kendi verisine eriştiği doğrulanmalıdır |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-009` | **S2** | `process` | `process` | Kritik işlemlerde (şifre/e-posta değişimi) mevcut şifre tekrar istenmelidir |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-010` | **S2** | `process` | `process` | E-posta doğrulama linkleri güvenli rastgele token içermelidir |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-011` | **S2** | `process` | `process` | Kullanıcı oturum süresi hareketsizlik durumunda otomatik sonlandırılmalıdır |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-012` | **S2** | `process` | `process` | Çok faktörlü kimlik doğrulama (MFA / TOTP) yönetici hesapları için desteklenmelidir |
| OWASP ASVS v5.0 | `V2` | `R-AUTH-013` | **S1** | `eslint` | `eslint.crypto-password-hash` | Şifre hashleme algoritması Argon2id veya Bcrypt (salt round >= 12) olmalıdır |
| MITRE CWE | `CWE-916` | `R-AUTH-013` | **S1** | `eslint` | `eslint.crypto-password-hash` | Şifre hashleme algoritması Argon2id veya Bcrypt (salt round >= 12) olmalıdır |
| OWASP ASVS v5.0 | `V7` | `R-AUTH-014` | **S2** | `process` | `process` | Yetkisiz erişim denemeleri güvenlik olay günlüğüne (audit log) kaydedilmelidir |
| OWASP ASVS v5.0 | `V3` | `R-AUTH-015` | **S1** | `eslint` | `eslint.auth-bearer-token-check` | API isteklerinde Authorization Bearer token başlığı doğrulanmalıdır |
| OWASP ASVS v5.0 | `V13` | `R-PII-001` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 1: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-001` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 1: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-002` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 2: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-002` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 2: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-003` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 3: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-003` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 3: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-004` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 4: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-004` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 4: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-005` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 5: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-005` | **S1** | `opengrep` | `opengrep.pii-guard` | Kişisel Veri (KVKK/GDPR) koruma kuralı 5: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-006` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 6: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-006` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 6: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-007` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 7: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-007` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 7: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-008` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 8: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-008` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 8: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-009` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 9: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-009` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 9: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-010` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 10: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-010` | **S1** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 10: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-011` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 11: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-011` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 11: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-012` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 12: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-012` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 12: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-013` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 13: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-013` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 13: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-014` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 14: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-014` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 14: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V13` | `R-PII-015` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 15: Hassas verilerin maskelenmesi ve güvenli saklanması |
| KVKK / GDPR | `KVKK-m12` | `R-PII-015` | **S2** | `process` | `process.gdpr` | Kişisel Veri (KVKK/GDPR) koruma kuralı 15: Hassas verilerin maskelenmesi ve güvenli saklanması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-001` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 1: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-001` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 1: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-001` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 1: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-002` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 2: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-002` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 2: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-002` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 2: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-003` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 3: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-003` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 3: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-003` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 3: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-004` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 4: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-004` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 4: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-004` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 4: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-005` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 5: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-005` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 5: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-005` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 5: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-006` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 6: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-006` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 6: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-006` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 6: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-007` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 7: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-007` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 7: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-007` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 7: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-008` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 8: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-008` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 8: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-008` | **S1** | `opengrep` | `opengrep.injection-guard` | Enjeksiyon ve Veri Doğrulama Kuralı 8: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-009` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 9: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-009` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 9: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-009` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 9: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-010` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 10: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-010` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 10: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-010` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 10: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-011` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 11: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-011` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 11: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-011` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 11: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-012` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 12: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-012` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 12: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-012` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 12: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-013` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 13: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-013` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 13: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-013` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 13: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-014` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 14: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-014` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 14: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-014` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 14: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| OWASP ASVS v5.0 | `V5` | `R-INJ-015` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 15: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-89` | `R-INJ-015` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 15: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| MITRE CWE | `CWE-79` | `R-INJ-015` | **S1** | `eslint` | `eslint.injection` | Enjeksiyon ve Veri Doğrulama Kuralı 15: XSS, SQLi, NoSQLi ve komut enjeksiyonu koruması |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-001` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 1: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-001` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 1: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-002` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 2: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-002` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 2: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-003` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 3: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-003` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 3: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-004` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 4: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-004` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 4: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-005` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 5: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-005` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 5: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-006` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 6: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-006` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 6: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-007` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 7: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-007` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 7: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-008` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 8: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-008` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 8: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-009` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 9: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-009` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 9: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-010` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 10: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-010` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 10: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-011` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 11: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-011` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 11: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-012` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 12: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-012` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 12: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-013` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 13: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-013` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 13: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-014` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 14: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-014` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 14: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-1.4.3` | `R-UI-015` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 15: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| W3C WCAG 2.2 AA | `WCAG-2.1.1` | `R-UI-015` | **S2** | `eslint` | `eslint.ui-design-token` | Arayüz ve Tasarım Sistemi Kuralı 15: Tailwind tokenları, WCAG 2.2 AA kontrast ve 5 durum matrisi |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-001` | **S1** | `stryker` | `stryker.zero-survived` | Test ve Mutasyon Kalite Kuralı 1: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-002` | **S1** | `stryker` | `stryker.zero-survived` | Test ve Mutasyon Kalite Kuralı 2: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-003` | **S1** | `stryker` | `stryker.zero-survived` | Test ve Mutasyon Kalite Kuralı 3: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-004` | **S1** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 4: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-005` | **S1** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 5: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-006` | **S2** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 6: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-007` | **S2** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 7: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-008` | **S2** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 8: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-009` | **S2** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 9: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Maintainability/Testability` | `R-TST-010` | **S2** | `process` | `process.test-coverage` | Test ve Mutasyon Kalite Kuralı 10: Vitest, MSW, Playwright ve Stryker-JS 0 mutant standardı |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-001` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 1: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-002` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 2: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-003` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 3: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-004` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 4: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-005` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 5: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-006` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 6: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-007` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 7: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-008` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 8: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-009` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 9: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
| ISO/IEC 25010:2023 | `Performance/TimeBehaviour` | `R-PERF-010` | **S2** | `eslint` | `eslint.perf-cwv` | Web Performans Kuralı 10: Core Web Vitals (LCP, INP, CLS), virtualization ve lazy loading |
