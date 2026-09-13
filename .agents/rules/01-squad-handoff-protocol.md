# 📜 Kural 01: Squad El Sıkışma (Handoff) Protokolü & Durum Makinesi

Bu anayasal kural, **Agent Squad Strapi & React** mimarisinde görevlerin yaşam döngüsünü, personelar arası görev devir (handoff) kurallarını, Definition of Ready (DoR) ve Definition of Done (DoD) kontrol kapılarını belirler.

---

## 1. 🔄 5 Aşamalı Katı El Sıkışma Zinciri

Tüm geliştirme süreci kök dizindeki `tasks.json` durum makinesi üzerinden yönetilir. Hiçbir persona kendi yetki alanı dışındaki aşamayı atlayamaz:

```text
       ┌───────────┐
       │  pending  │ (Backlog'da bekleyen atomik görev)
       └─────┬─────┘
             │
             ▼
   [Aşama 1: Kapsam & Analiz] ────────► İş Analisti (BABOK v3 & JTBD & 4 Kademeli Gherkin)
             │
             ▼
   [Aşama 2: Mimari & UX Şartnamesi] ─► Çözüm Mimarı (Clean Arch/Rohit Kuwar) & UI/UX Tasarımcısı (Radix/Tailwind)
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

## 2. 🎯 Temel Akış Kuralları

1. **WIP = 1 (Work-in-Progress Sınırı):**
   - Aynı anda yalnızca **tek bir atomik görev** `in_progress` veya `in_review` durumunda olabilir.
   - Önceki görev `completed` durumuna geçmeden veya açıkça `blocked` olarak işaretlenmeden yeni göreve başlanamaz.
2. **Roller Arası Ayrık Denetim (Checks & Balances):**
   - Kodu yazan (`backend-engineer` veya `frontend-engineer`), kendi kodunun test veya güvenlik onayını veremez.
   - `qa-tester` ve `security-reviewer` onay vermeden görev asla `completed` olamaz.
3. **DoR (Definition of Ready) Kapısı Şartları:**
   Bir görev `in_progress` aşamasına geçmeden önce `dorMet: true` olmalıdır. Gerekli şartlar:
   - [ ] İş Analisti tarafından 4 kademeli Gherkin senaryoları yazılmış (`Happy`, `Validation`, `Conflict`, `Security`).
   - [ ] Strapi Content-Type şeması veya veri sözlüğü alanları tanımlanmış.
   - [ ] Çözüm Mimarı tarafından Rohit Kuwar React mimarisi katmanları ve Strapi v5 Document Service stratejisi belirlenmiş.
   - [ ] UI/UX Tasarımcısı tarafından 5 bileşen durumu ve Tailwind CSS/Radix tokenları belirlenmiş.
4. **DoD (Definition of Done) Kapısı Şartları:**
   Bir görev `completed` aşamasına geçmeden önce `dodMet: true` olmalıdır. Gerekli şartlar:
   - [ ] Geliştirilen kod tüm ESLint ve TypeScript derleme kontrollerinden **0 hata ve 0 uyarı** ile geçmiş.
   - [ ] `dependency-cruiser` mimari katman denetimi hatasız (`depcruise:check` PASS).
   - [ ] Vitest / Jest testleri yazılmış ve tamamı geçmiş.
   - [ ] Stryker-JS mutasyon testinde değişen satırlarda sıfır hayatta kalan mutant (`max_survived_on_changed: 0`).
   - [ ] Semgrep güvenlik taramasında hiçbir açık bulunmamış (OWASP ASVS uyumlu).
   - [ ] Dokümantasyon ve `tasks.json` artefaktları eksiksiz doldurulmuş.
5. **Revizyon Döngüsü (`changes_requested`):**
   - QA veya Güvenlik incelemesinde bir kusur bulunursa görev `changes_requested` durumuna alınır ve `rejectionCount` 1 artırılır.
   - `reviewNotes` listesine reddedilme gerekçesi, satır numarası ve kural referansı yazılır.
   - İlgili mühendis düzeltmeyi yaptıktan sonra görev tekrar `in_review` aşamasına iletilir.
