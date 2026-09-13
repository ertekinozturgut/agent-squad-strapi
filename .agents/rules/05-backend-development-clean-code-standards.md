# 💻 Kural 05: TypeScript & Clean Code Standartları

Bu anayasal kural, **Strapi v5**, **Next.js** ve **React** kod tabanlarında uygulanacak TypeScript ve Clean Code (Uncle Bob) yazılım geliştirme standartlarını belirler.

---

## 1. 📏 Fonksiyon ve Modül Sınırları

1. **Fonksiyon Uzunluğu:**
   - Bir fonksiyon veya React bileşeni en fazla **25 satır** olmalıdır. 25 satırı aşan mantıklar küçük, tek sorumluluklu (SRP) saf fonksiyonlara veya özel hook'lara (custom hooks) parçalanmalıdır.
2. **Parametre Sınırı:**
   - Bir fonksiyon en fazla **3 parametre** alabilir. 3'ten fazla parametre gerekiyorsa, açıkça tiplendirilmiş bir `options` veya `props` nesnesi (Interface/Type) kullanılmalıdır.
3. **Dosya Uzunluğu:**
   - Tek bir dosya en fazla **300 satır** olabilir. 300 satırı geçen dosyalar alt bileşenlere, hook'lara veya yardımcı modüllere bölünmelidir.
4. **Erken Dönüş (Guard Clauses):**
   - İç içe geçmiş `if-else` merdivenleri (nesting > 2) yasaktır. Koşullar fonksiyonun başında Guard Clause ile kontrol edilip erken dönüş (`return`) yapılmalıdır:
   ```typescript
   // ❌ YANLIŞ
   function handleOrder(order: Order | null) {
     if (order) {
       if (order.isValid) {
         processPayment(order);
       }
     }
   }

   // ✅ DOĞRU
   function handleOrder(order: Order | null) {
     if (!order || !order.isValid) return;
     processPayment(order);
   }
   ```

---

## 2. 🛡️ Katı Tip Güvenliği (Strict TypeScript)

1. **Sıfır `any` Politikası:**
   - Kod tabanında `any` tipi kullanımı **kesinlikle yasaktır** (`@typescript-eslint/no-explicit-any: error`).
   - Tipi bilinmeyen dış veriler için `unknown` kullanılmalı ve `zod` veya tip muhafızları (Type Guards) ile doğrulanmalıdır.
2. **Immutable Veri Yönetimi:**
   - Dizi ve nesnelerin doğrudan mutasyona uğratılması (`array.push()`, `obj.prop = val`) yasaktır. Daima `spread operator`, `map`, `filter` veya immutable desenler kullanılmalıdır.
3. **Props ve State Tipleri:**
   - Her React bileşeni, props arayüzünü (`interface ButtonProps { ... }`) açıkça tanımlamalıdır.

---

## 3. 🚨 Hata Yönetimi ve Result Sözleşmesi

1. **Merkezi Servis Hata Yakalama:**
   - Ağ isteklerinde `catch (err)` bloklarında `console.log` bırakıp hatayı yutmak yasaktır.
   - Hatalar `apiClient.ts` içindeki merkezi interceptor tarafından `AppError` sınıfına dönüştürülmeli ve UI katmanına anlamlı hata koduyla aktarılmalıdır.
2. **Strapi Hata İdiyomları:**
   - Strapi v5 servislerinde `throw new Error("...")` yerine `@strapi/utils.errors` (`ApplicationError`, `ValidationError`, `NotFoundError`) sınıfları fırlatılmalıdır.
3. **React Hata Sınırları (Error Boundaries):**
   - Beklenmeyen React render hatalarının tüm sayfayı çökertmemesi için her sayfa ve kritik özellik (feature) etrafında `ErrorBoundary` bulunmalıdır.
