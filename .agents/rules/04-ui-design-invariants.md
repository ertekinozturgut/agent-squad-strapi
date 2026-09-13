# 🎨 Kural 04: UI & Tasarım Sistemi Değişmezleri (UI Design Invariants)

Bu anayasal kural, **Tailwind CSS**, **Radix UI**, **Modern Web Guidance** ve **WCAG 2.2 AA** standartlarına dayalı kullanıcı deneyimi ve arayüz kalite ilkelerini belirler.

---

## 1. 🎯 Temel Tasarım Sistemi İlkeleri

1. **Sıfır Satır İçi (Inline) CSS:**
   - Bileşenlerde `style={{ ... }}` kullanımı **kesinlikle yasaktır** (Sadece koordinat veya dinamik drag-and-drop hesaplamaları hariç).
   - Tüm stiller Tailwind CSS utility sınıfları ve Tailwind yapılandırmasındaki tasarım tokenları üzerinden uygulanmalıdır.
2. **Tasarım Tokenları (Design Tokens):**
   - Rastgele piksel veya hex renk değerleri (`bg-[#123456]`, `w-[342px]`) yazılması yasaktır.
   - Renkler, boşluklar (spacing), yuvarlatma (border-radius) ve gölgeler (box-shadow) CSS Değişkenleri (`--color-primary-600`, `--radius-md` vb.) ile belirlenen token kataloğundan seçilmelidir.
3. **Radix UI Headless Primitifleri:**
   - Modal dialog, dropdown menü, tooltip, akordiyon, popover gibi karmaşık bileşenlerde tekerlek yeniden icat edilmez.
   - Radix UI (`@radix-ui/react-*`) primitifleri kullanılarak erişilebilirlik (ARIA etiketleri, focus trap, ESC tuşu yönetimi) garanti altına alınır.

---

## 2. 🎛️ 5 Zorunlu Bileşen Durumu (State Matrix)

Herhangi bir interaktif bileşen (Button, Input, Select, Card Link) tasarlanırken ve kodlanırken aşağıdaki **5 durum** eksiksiz tanımlanmalıdır:

| Durum | Görsel & Davranışsal Şartlar |
| :--- | :--- |
| **1. Default** | Net görsel hiyerarşi, WCAG 4.5:1 kontrast standardı. |
| **2. Hover** | Hafif arka plan veya parlaklık değişimi (`hover:bg-primary-700`), akıcı geçiş (`transition-colors duration-200`). |
| **3. Focus-Visible** | Klavye kullanıcıları için belirgin odak halkası (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`). |
| **4. Active / Loading** | İşlem sürerken çift tıklamayı (double-submit) önleme, spinner / skeleton göstergesi, `aria-busy="true"`. |
| **5. Disabled** | Azaltılmış opaklık (`opacity-50 cursor-not-allowed`), `pointer-events-none`, form gönderimini engelleme. |

### 📭 Boş Durum (Empty State) & Hata Durumu (Error State)
- Liste veya tablo boş olduğunda düz beyaz sayfa gösterilemez. Açıklayıcı bir ikon, bilgilendirici başlık ve kullanıcıyı eyleme geçiren birincil buton (`Call-to-Action`) içeren bir Empty State bileşeni sunulmalıdır.
- Hata durumlarında form alanının altına kırmızı uyarı metni ve `aria-invalid="true"` eklenmelidir.

---

## 3. 🚀 Modern Web Standartları (Modern Web Guidance)

1. **Üst Katman API'leri (Native Dialog & Popover API):**
   - Karmaşık `z-index: 99999` savaşları yerine tarayıcının yerel `<dialog>` veya `popover` API'leri tercih edilmelidir.
   - Giriş ve çıkış animasyonlarında modern CSS `@starting-style` ve `transition-behavior: allow-discrete` kuralları uygulanmalıdır.
2. **Erişilebilirlik (WCAG 2.2 AA):**
   - Tüm form girdilerinin (`<input>`) ilişkili bir `<label>` etiketi veya `aria-label` niteliği olmalıdır.
   - Yalnızca ikon içeren butonlarda mutlaka `aria-label` veya `sr-only` açıklama metni bulunmalıdır.
3. **Core Web Vitals (CWV) & Performans:**
   - Görsellerde CLS (Cumulative Layout Shift) oluşmaması için `aspect-ratio` veya `width`/`height` tanımlanmalıdır.
   - Ekran dışı (offscreen) ağır içerikler için `content-visibility: auto` ve `loading="lazy"` kullanılmalıdır.
