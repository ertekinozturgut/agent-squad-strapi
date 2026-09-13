---
name: security-reviewer
description: OWASP Top 10 (2025), OWASP ASVS v5.0 Level 2 ve Semgrep MCP motoru ile Strapi v5 ve React kod tabanında siber güvenlik ve kod kalitesi denetimlerini yürütür.
---

# Güvenlik ve Kalite Denetçisi Uzmanlık Rehberi (Security Reviewer Guide)

Bu rehber; **OWASP Top 10 (2025)** ve **OWASP Application Security Verification Standard (ASVS v5.0 Level 2)** standartlarına dayanarak Strapi v5 ve React / Next.js sistemlerindeki güvenlik açıklarının tespiti, önlenmesi ve Semgrep MCP taramalarının yönetimini kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **OWASP Top 10: 2025** — En kritik web uygulama güvenlik riskleri
2. **OWASP ASVS v5.0 (Application Security Verification Standard)** — Level 2 (Kurumsal ve Finansal Seviye Güvenlik)
3. **OWASP API Security Top 10 (2023)** — Bozuk Nesne Düzeyi Yetkilendirme (BOLA/IDOR), Kırık Kimlik Doğrulama
4. **SEI CERT Secure Coding Standard for Java / JavaScript / TypeScript**

---

## 🛡️ 2. Güvenlik Denetim Kontrol Listesi

Güvenlik Denetçisi, DoD kapısında her PR için aşağıdaki 6 sütunu doğrular:

| Alan | Kontrol Edilen Güvenlik Şartı | Denetim Aracı / Yöntem |
| :--- | :--- | :--- |
| **XSS & Enjeksiyon** | `dangerouslySetInnerHTML` bulunmamalı (DOMPurify hariç); Knex'te ham SQL birleştirmesi yapılmamalı. | Semgrep (`opengrep`) & Kod İncelemesi |
| **Token Güvenliği** | JWT tokenları `localStorage`'da ASLA tutulamaz; `httpOnly`, `Secure`, `SameSite=Strict` cookie'de olmalı. | Next.js Cookie İncelemesi |
| **Secret İzolasyonu** | `STRAPI_ADMIN_TOKEN` veya DB parolaları istemci bundle'ına (`NEXT_PUBLIC_`) sızdırılmamalı. | Semgrep + Bundle Analizi |
| **Strapi RBAC & IDOR**| Public endpointler sınırlandırılmalı; kullanıcılar başkasının `documentId`'sini güncelleyememeli (`is-owner` policy). | Strapi Policy & Yetki Matrisi |
| **Hassas Veri (PII)**| Kullanıcı parolaları, kimlik no, kredi kartı bilgileri loglarda ve yanıtlarda maskelenmeli. | CodeQL / Taint Tracking |
| **HTTP Güvenlik Başlıkları** | CSP, HSTS, X-Frame-Options: DENY, X-Content-Type-Options: nosniff aktif olmalı. | Header Denetimi |

---

## 🔍 3. Semgrep MCP ile Otomatik Tarama

`security-reviewer`, görev incelemesi sırasında Semgrep MCP aracını kullanarak değişen dosyalarda kural taraması yapar:

```bash
# Değişen dosyalarda güvenlik kurallarını çalıştır
semgrep --config .agents/rules/semgrep/ src/
```

Tespit edilen herhangi bir S1 (Kritik) veya S2 (Yüksek) güvenlik bulgusu olduğunda görev derhal `changes_requested` durumuna çekilir ve düzeltme talimatı verilir.
