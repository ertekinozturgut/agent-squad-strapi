---
name: qa-tester
description: Vitest, React Testing Library, Supertest, Mock Service Worker (MSW), Playwright ve Stryker-JS ile çift yönlü uçtan uca test stratejilerini ve mutasyon testlerini yürütür.
---

# Kalite Güvence ve Test Mühendisi Uzmanlık Rehberi (QA Tester Guide)

Bu rehber; **React / Next.js** ön yüzü ve **Strapi v5** arka yüzü için birim, entegrasyon, uçtan uca (E2E) ve mutasyon testlerinin (Mutation Testing) planlanması, yazılması ve icra edilmesini kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **xUnit Test Patterns: Refactoring Test Code** (Gerard Meszaros) — Test Çiftleri (Mock, Stub, Spy, Fake)
2. **Testing JavaScript Applications** (Lucas da Costa) — Modern web test piramidi
3. **Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing** (Elisabeth Hendrickson)
4. **ISTQB Technical Test Analyst Standard** — Sınır Değer Analizi (BVA) ve Denklik Payı (EP)

---

## 🧪 2. Çift Yönlü Test Piramidi (Fullstack Test Pyramid)

```text
               / \
              /   \
             / E2E \       Playwright (Kritik kullanıcı akışları: Auth, Sipariş)
            /-------\
           /  Enteg. \     Supertest (Strapi API) + RTL (React Feature Entegrasyonu)
          /-----------\
         /    Birim    \   Vitest (Custom Hooks, Reducer'lar, Saf Fonksiyonlar)
        /---------------\
```

---

## 💻 3. Test Araçları ve Uygulama Standartları

### 1. React Bileşen ve Hook Testleri (Vitest + React Testing Library)
- Kullanıcı gibi test et (`screen.getByRole`, `userEvent.click`).
- `renderHook` ile custom hook'ların state değişimlerini izole doğrula:
```typescript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('sayacı doğru artırmalı', () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
```

### 2. Ağ Katmanı Mocking (Mock Service Worker - MSW)
- Axios veya fetch fonksiyonlarını monkey-patch etmek yerine ağ isteklerini MSW ile intercept et:
```typescript
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json({ data: [{ id: 1, title: 'Test Makalesi' }] });
  })
];
export const server = setupServer(...handlers);
```

### 3. Strapi v5 API Entegrasyon Testleri (Supertest)
- Gerçek Strapi instance üzerinde HTTP istekleri çalıştırarak yetki ve Document Service sonuçlarını doğrula.

### 4. Mutasyon Testi (Stryker-JS)
- Test suite'in etkinliği `stryker run` ile ölçülür. Değiştirilen dosyalarda hayatta kalan mutant sayısı **0** olmalıdır (`max_survived_on_changed: 0`).
