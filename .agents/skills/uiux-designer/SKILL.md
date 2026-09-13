---
name: uiux-designer
description: Don Norman, Refactoring UI ve WCAG 2.2 AA prensipleriyle Tailwind CSS tasarım tokenları, Radix UI headless bileşen şartnameleri ve 5 kademeli bileşen durum matrisini hazırlar.
---

# UI/UX Tasarımcısı Uzmanlık Rehberi (UI/UX Designer Guide)

Bu rehber, kullanıcı deneyimi ilkeleri, görsel hiyerarşi, Tailwind CSS tasarım sistemleri, Radix UI erişilebilirlik entegrasyonu ve sıfır sürtünmeli arayüz standartlarını kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **The Design of Everyday Things** (Don Norman) — Algılanabilirlik (Affordance) ve Geri Bildirim (Feedback)
2. **Don't Make Me Think, Revisited** (Steve Krug) — Bilişsel yükü sıfırlama ve sezgisel gezinme
3. **Refactoring UI** (Adam Wathan & Steve Schoger) — Pratik görsel hiyerarşi, boşluk ve tipografi
4. **Web Content Accessibility Guidelines (WCAG 2.2 Level AA)** (W3C)

---

## 🎨 2. Tailwind CSS Tasarım Sistemi & Token Yönetimi

Tasarımcı, projede kullanılacak renk, tipografi, boşluk ve gölge tokenlarını CSS Değişkenleri üzerinden standardize eder:

```css
:root {
  --color-primary-50: #eef2ff;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-neutral-900: #0f172a;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
```

### Kurallar:
- Rastgele piksel veya hex renk kodu verilemez.
- Sayfa ve kart düzenlerinde 4'ün veya 8'in katları olan boşluk ölçeği (`gap-2`, `gap-4`, `gap-6`, `gap-8`) zorunludur.

---

## 🎛️ 3. 5 Kademeli Bileşen Durum Matrisi (State Matrix)

Her arayüz bileşeni geliştirilmeden önce Tasarımcı tarafından şu 5 durumu içeren şartname hazırlanmalıdır:

```text
[Bileşen: Primary Button]
├── 1. Default:       bg-primary-600 text-white font-medium px-4 py-2 rounded-md
├── 2. Hover:         bg-primary-700 transition-colors duration-150
├── 3. Focus-visible: ring-2 ring-primary-500 ring-offset-2 outline-none
├── 4. Active/Loading:bg-primary-700 opacity-80 cursor-wait (Spinner ikonu + aria-busy)
└── 5. Disabled:      bg-neutral-300 text-neutral-500 cursor-not-allowed pointer-events-none
```

---

## ♿ 4. WCAG 2.2 AA Erişilebilirlik ve Radix UI Şartları

1. **Kontrast Oranı:** Normal metinler için en az **4.5:1**, büyük başlıklar için en az **3:1** kontrast oranı sağlanmalıdır.
2. **Klavye Odağı:** `outline: none` ile odak göstergesi asla yok edilemez; daima `focus-visible:ring-2` halkası bulunmalıdır.
3. **Headless Bileşenler:** Dropdown, Modal, Tooltip gibi bileşenlerde ARIA rollerinin doğru işletilmesi için Radix UI primitifleri şart koşulur.
