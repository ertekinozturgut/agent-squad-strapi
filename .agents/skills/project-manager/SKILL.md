---
name: project-manager
description: PMBOK 7th, Scrum ve Accelerate (DORA) metriklerine dayalı görev döngüsü (Task State Machine), iş kırılım yapısı (WBS), DoR/DoD kapı kontrolleri ve Strapi & React squad orkestrasyonunu yönetir.
---

# Proje Yöneticisi ve Orkestratör Uzmanlık Rehberi (PM & Orchestration Guide)

Bu rehber; Strapi v5 ve React / Next.js projesindeki görev döngüsünün (`tasks.json`), iş kırılım yapısının (WBS), roller arası el sıkışmanın, kriz yönetiminin ve kalite kapılarının (DoR / DoD) kesintisiz işletilmesi prosedürlerini içerir.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **A Guide to the Project Management Body of Knowledge (PMBOK Guide 7th Edition)** (PMI)
2. **The Scrum Guide** (Ken Schwaber & Jeff Sutherland) — Şeffaflık, Denetim ve Uyarlama sütunları
3. **Accelerate: The Science of Lean Software and DevOps** (Nicole Forsgren, Jez Humble, Gene Kim) — DORA metrikleri: Lead Time, Deployment Frequency, MTTR, Change Failure Rate
4. **The Mythical Man-Month: Essays on Software Engineering** (Frederick P. Brooks Jr.) — İletişim maliyeti ve Brooks Yasası
5. **Kanban: Successful Evolutionary Change for Your Technology Business** (David J. Anderson) — Akış yönetimi ve WIP limitleri

---

## ⚙️ 2. Görev Durum Makinesi (Task State Machine) ve WIP Limiti

Squad'ın tüm iş akışı tek bir merkezi kuyruk dosyası olan `tasks.json` (`tasks.schema.json` standardında) üzerinden yürütülür.

```text
       ┌───────────┐
       │  pending  │ (Kuyrukta bekleyen atomik görev)
       └─────┬─────┘
             │ [DoR Onayı: Analiz + Strapi Modeli + Rohit Kuwar Mimarisi + UX Şartnameleri]
             ▼
      ┌─────────────┐
      │ in_progress │ ──(Beklenmedik engel)──► ┌─────────┐
      └──────┬──────┘                          │ blocked │
             │ [Geliştirme Bitti: Strapi API + React UI] └────┬────┘
             ▼                                       │ (Engel Çözüldü)
       ┌───────────┐                                 │
  ┌──► │ in_review │ ◄───────────────────────────────┘
  │    └─────┬─────┘
  │          ├──────(QA / Security Reddi: revizyon)──► ┌───────────────────┐
  │          │                                         │ changes_requested │
  │          │                                         └─────────┬─────────┘
  │          │                                                   │ (Revizyon bitti)
  │          │ ◄─────────────────────────────────────────────────┘
  │          │
  │          │ [DoD Onayı: Vitest/Playwright Yeşil + ESLint 0 Warning + depcruise + Security]
  │          ▼
  │    ┌───────────┐
  └─── │ completed │ ──► (Sıradaki pending görevi tetikle)
       └───────────┘
```

### 🔴 KESİN KURAL: Work-in-Progress (WIP) Limiti = 1
- Squad içinde aynı anda **yalnızca 1 görev `in_progress` veya `changes_requested` olabilir**.
- Bir görev `completed` olmadan veya resmi olarak `blocked` durumuna çekilip gerekçesi yazılmadan asla başka bir göreve başlanamaz.
- *Gerekçe:* Çoklu görev (multitasking) bağlam değiştirme maliyetini katlar, hataları ve teslimat süresini artırır.

---

## 🚪 3. DoR ve DoD Giriş/Çıkış Kapıları

### 🟢 Definition of Ready (DoR) — Geliştirmeye Başlama Şartları
`project-manager`, bir görevi `in_progress` durumuna almadan önce şu kontrolleri yapar:
1. `business-analyst` 4 kademeli Gherkin kriterlerini yazmış mı?
2. `solution-architect` Strapi v5 Document Service API sözleşmesini ve Rohit Kuwar React katmanını belirlemiş mi?
3. `uiux-designer` 5 bileşen durumunu ve Tailwind CSS tokenlarını tanımlamış mı?
4. Görev bağımlılıkları (`dependencies`) tamamen `completed` olmuş mu?

### 🏁 Definition of Done (DoD) — Tamamlandı İlan Etme Şartları
`project-manager`, bir görevi `completed` yapmadan önce şu kanıtları doğrular:
1. `qa-tester` test sonuçlarını (Vitest, Supertest, Playwright) onaylamış mı?
2. `security-reviewer` OWASP ASVS v5.0 ve Semgrep tarama raporunu onaylamış mı?
3. `depcruise:check` çalıştırılmış ve mimari katman ihlali bulunmadığı teyit edilmiş mi?
4. TypeScript derlemesinde ve ESLint'te 0 hata ve 0 uyarı sağlandı mı?
