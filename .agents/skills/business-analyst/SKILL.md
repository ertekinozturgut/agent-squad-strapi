---
name: business-analyst
description: BABOK v3, JTBD ve Specification by Example metodolojileriyle iş analizi, Strapi v5 Content Type modelleme şartnameleri ve 4 kademeli Gherkin kabul kriterlerini hazırlar.
---

# İş Analisti Uzmanlık Rehberi (Business Analyst Guide)

Bu rehber, iş gereksinimlerinin kullanıcı hikayelerine dönüştürülmesi, Strapi v5 veri modelleme ihtiyaçlarının tanımlanması ve 4 kademeli Gherkin kabul kriterleri ile hatasız analiz çıkarılmasını kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **A Guide to the Business Analysis Body of Knowledge (BABOK Guide v3)** (IIBA)
2. **Competing Against Luck: The Story of Innovation and Customer Choice** (Clayton M. Christensen) — Jobs to Be Done (JTBD)
3. **Specification by Example: How Successful Teams Deliver the Right Software** (Gojko Adzic) — Somut örneklerle gereksinim analizi
4. **Writing Effective Use Cases** (Alistair Cockburn) — Kullanım senaryoları ve istisna yolları

---

## 🏗️ 2. Strapi v5 İçerik Tipi (Content-Type) Modelleme Şartnamesi

Analist, her yeni gereksinim için Strapi v5 veri yapısını belirler:

1. **İçerik Tipi Kategorisi:**
   - **Collection Type:** Birden fazla kaydı olan varlıklar (Makaleler, Ürünler, Kullanıcılar).
   - **Single Type:** Tekil konfigürasyon veya statik sayfalar (Site Ayarları, Hakkımızda).
   - **Component:** Yeniden kullanılabilir alan kümeleri (SEO Meta, İletişim Bilgisi).
   - **Dynamic Zone:** Esnek sayfa oluşturucu blokları (Hero Blok, Galeri, CTA).
2. **Alan Tipleri ve Kısıtlar (Field Constraints):**
   - Her alan için: `Type` (string, text, richtext, integer, decimal, boolean, date, media, relation).
   - `Required`, `Unique`, `Min/Max Length`, `Default Value` ve `Regex` kuralları.
3. **İlişki Haritası (Relations):**
   - 1:1 (Has One), 1:N (Has Many), N:M (Many to Many), Morfik/Polimorfik ilişkiler.

---

## 🥒 3. 4 Kademeli Gherkin Kabul Kriteri Standardı

Her kullanıcı hikayesi için aşağıdaki 4 senaryo türü zorunludur:

```gherkin
Feature: Kullanıcı Profil Güncelleme

  # 1. Kademe: Happy Path (Kusursuz Başarılı Akış)
  Scenario: Geçerli bilgilerle profil başarıyla güncellenir
    Given kullanıcı sisteme giriş yapmış ve profil sayfasındadır
    When adını "Ahmet" ve telefon numarasını "+905551234567" olarak güncelleyip "Kaydet"e basarsa
    Then Strapi Document Service kaydı güncellemeli ve ekranda "Profiliniz güncellendi" mesajı çıkmalıdır

  # 2. Kademe: Validation Errors (Girdi Doğrulama ve Sınır Değerler)
  Scenario: Geçersiz e-posta formatı girildiğinde hata verilir
    Given kullanıcı profil sayfasındadır
    When e-posta alanına "hatali-email" girip "Kaydet"e basarsa
    Then form gönderilmemeli ve e-posta alanının altında "Geçerli bir e-posta adresi giriniz" uyarısı belirmelidir

  # 3. Kademe: Edge & Conflict Cases (Çakışma ve İstisnai Durumlar)
  Scenario: Başka bir kullanıcının e-posta adresi girildiğinde çakışma önlenir
    Given "mehmet@example.com" e-posta adresi sistemde başka bir kullanıcıya aittir
    When kullanıcı kendi e-postasını "mehmet@example.com" olarak değiştirmeyi denerse
    Then sistem 409 Conflict yanıtı dönmeli ve ekranda "Bu e-posta adresi zaten kullanımda" uyarısı gösterilmelidir

  # 4. Kademe: Security & Auth (Yetki, Rol ve PII Güvenliği)
  Scenario: Yetkisiz bir kullanıcı başka bir kullanıcının profilini güncelleyemez (IDOR Engelleme)
    Given kullanıcı "user_123" kimliğiyle oturum açmıştır
    When "user_456" profili için güncelleme isteği gönderirse
    Then sistem 403 Forbidden yanıtı dönmeli ve hiçbir veri tabanı değişikliği yapılmamalıdır
```
