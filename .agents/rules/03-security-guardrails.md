# 🛡️ Kural 03: Güvenlik Korkulukları (Security Guardrails)

Bu anayasal kural, **OWASP Top 10 (2025)** ve **OWASP ASVS v5.0** standartları doğrultusunda Strapi v5 ve React / Next.js uygulamaları için bağlayıcı güvenlik şartlarını belirler.

---

## 1. 🌐 React & Next.js Frontend Güvenlik Standartları

1. **XSS ve Ham HTML Yasağı:**
   - React bileşenlerinde `dangerouslySetInnerHTML` kullanımı **kesinlikle yasaktır**.
   - Zengin metin (Rich Text / Markdown) gösterimi zorunluysa, içerik mutlak surette `DOMPurify.sanitize()` filtresinden geçirilmeli ve test edilmelidir.
2. **Kimlik Bilgisi ve Token Saklama Politikası:**
   - JWT erişim veya yenileme tokenları **ASLA** `localStorage` veya `sessionStorage` içinde saklanamaz (XSS saldırılarına karşı savunmasızdır).
   - Tüm kimlik doğrulama tokenları `httpOnly`, `Secure`, `SameSite=Strict` (veya kontrollü akışlarda `Lax`) çerezler (cookies) içinde tutulmalıdır.
3. **Gizli Anahtar İzolasyonu (No Server Secret Leak):**
   - Strapi API tokenları (`STRAPI_ADMIN_TOKEN`), veritabanı şifreleri veya özel servis anahtarları **ASLA** `NEXT_PUBLIC_` ön eki alamaz.
   - Bu anahtarlar yalnızca Next.js Server Components veya Server Actions içinde çalıştırılabilir; istemci JavaScript paketine (bundle) dahil edilemez.
4. **Zorunlu HTTP Güvenlik Başlıkları:**
   Next.js konfigürasyonunda (`next.config.js` veya middleware) şu başlıklar zorunludur:
   - `Content-Security-Policy`: Güvensiz `eval()` ve kaynağı belirsiz scriptler engellenmelidir.
   - `Strict-Transport-Security`: `max-age=31536000; includeSubDomains; preload`
   - `X-Frame-Options`: `DENY` (Clickjacking koruması)
   - `X-Content-Type-Options`: `nosniff`
   - `Referrer-Policy`: `strict-origin-when-cross-origin`

---

## 2. 🗄️ Strapi v5 Backend Güvenlik Standartları

1. **En Az Yetki İlkesi (Least Privilege & RBAC):**
   - Strapi `Public` rolü yalnızca kamusal katalog/sayfa okuma işlemleri için açık olabilir.
   - Yazma, güncelleme ve silme işlemleri mutlaka kimliği doğrulanmış (`Authenticated`) roller ve dinamik sahiplik kuralları (`is-owner` policy) ile korunmalıdır.
2. **SQL / NoSQL Enjeksiyonu Engelleme:**
   - Knex query builder kullanırken doğrudan string birleştirmeli `raw()` sorguları yasaktır. Daima parametreli bağlama (`bindings`) kullanılmalıdır.
3. **Hassas Veri Sızıntısı Koruması (Response Sanitization):**
   - API yanıtları dönmeden önce `strapi.contentAPI.sanitize.output` fonksiyonundan geçirilmelidir.
   - Kullanıcı nesnelerindeki `password`, `resetPasswordToken`, `confirmationToken` gibi alanlar asla istemciye iletilemez.
4. **Dosya Yükleme Güvenliği:**
   - Yüklenen dosyaların MIME tipleri doğrulanmalı, uzantı ve `magic number` kontrolleri yapılmalıdır.
   - `.exe`, `.sh`, `.bat`, `.php`, `.js` ve SVG içindeki gömülü XSS scriptleri engellenmelidir.
5. **Hız Sınırlama (Rate Limiting) & CORS:**
   - Auth endpoint'leri (`/api/auth/local`, `/api/auth/forgot-password`) brute-force saldırılarına karşı `strapi-middleware-rate-limit` ile sınırlandırılmalıdır.
   - CORS konfigürasyonunda `origin: '*'` kesinlikle yasaktır; sadece izinli frontend domainleri tanımlanmalıdır.
