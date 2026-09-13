---
name: frontend-engineer
description: Rohit Kuwar React Architecture, Next.js App Router (Server/Client Components), TanStack Query v5, Custom Hooks, Feature-Based modüler yapı, Radix UI ve Modern Web standartlarını uygular.
---

# Frontend Mühendisi Uzmanlık Rehberi (Frontend Engineer Guide)

Bu rehber, **Rohit Kuwar React Architecture** prensipleri doğrultusunda, **Next.js App Router** ve **React** kullanarak ölçeklenebilir, modüler, tip-güvenli ve yüksek performanslı modern ön yüz uygulamalarının inşasını kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **React Architecture: A Complete Guide for Scalable Front-End Applications** (Rohit Kuwar)
2. **Learning React: Modern Patterns for Developing React Apps (2nd Edition)** (Alex Banks & Eve Porcello)
3. **Next.js App Router & React Server Components Architecture Guide** (Vercel)
4. **W3C / WHATWG HTML Living Standard & Modern Web Guidance** (Dialog, Popover, View Transitions, CWV)

---

## 🏗️ 2. Özellik Tabanlı (Feature-Based) Dikey Mimari

Rohit Kuwar mimarisinin temeli dikey dilimlemedir (Vertical Slices). Her işlevsel özellik kendi izole dünyasına sahiptir:

```text
src/features/auth/
├── components/           # UI ve Konteyner bileşenleri
│   ├── LoginForm.tsx     # Presentation / UI bileşeni
│   └── LoginCard.tsx     # Container bileşeni
├── hooks/                # Özelliğe özel özel hook'lar
│   ├── useAuth.ts        # Oturum kontrolü
│   └── useLogin.ts       # TanStack Query useMutation sarmalayıcısı
├── services/             # API çağrıları
│   └── authService.ts    # apiClient üzerinden Strapi istekleri
├── types/                # TypeScript arayüzleri
│   └── auth.types.ts
└── index.ts              # Sadece dışarıya açılan genel API (Public Barrel)
```

### 🔒 Barrel Export Kuralı:
Diğer modüller `auth` içindeki alt dosyalara erişemez. Yalnızca `src/features/auth/index.ts` üzerinden dışa aktarılan bileşen veya hook'ları import edebilir:
```typescript
// ✅ Doğru
import { useAuth, LoginForm } from '@/features/auth';

// ❌ Yasak (dependency-cruiser tarafından engellenir)
import { authService } from '@/features/auth/services/authService';
```

---

## 🔄 3. Veri Akışı ve TanStack Query v5 Entegrasyonu

Bileşenler içinde doğrudan `fetch` veya `axios` çağrısı yapmak **kesinlikle yasaktır**.

```typescript
// 1. Service Katmanı (src/features/products/services/productService.ts)
import { apiClient } from '@/services/apiClient';
import { Product } from '../types/product.types';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/api/products?populate=*');
    return response.data;
  }
};

// 2. Hook Katmanı (src/features/products/hooks/useProducts.ts)
import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
    staleTime: 5 * 60 * 1000, // 5 dakika taze tut
  });
};

// 3. Container & UI Katmanı (src/features/products/components/ProductList.tsx)
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <ProductListSkeleton />;
  if (error) return <ProductListError error={error} />;
  if (!products || products.length === 0) return <ProductListEmpty />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

---

## ⚡ 4. Performans ve Modern Web Standartları

1. **Gereksiz Render Önleme:**
   - Sık render edilen ağır çocuk bileşenler `React.memo` ile sarmalanır.
   - Fonksiyon referansları `useCallback`, ağır hesaplamalar `useMemo` ile korunur.
2. **Kod Bölümleme (Code Splitting):**
   - Kullanıcının ilk anda görmediği büyük modüller (Grafikler, zengin metin editörleri, büyük modal pencereler) `next/dynamic` veya `React.lazy` ile dinamik yüklenir.
3. **Üst Katman Bileşenleri (Dialog & Popover):**
   - Modallar için Radix UI Dialog (`@radix-ui/react-dialog`) veya tarayıcının yerel `<dialog>` elementi kullanılır.
   - `@starting-style` ile giriş ve çıkış animasyonları CSS seviyesinde sıfır JS yüküyle çalıştırılır.
4. **Hata Yakalama (ErrorBoundary):**
   - Her kritik feature ve sayfa seviyesinde bir `ErrorBoundary` konumlandırılarak tüm uygulamanın çökmesi engellenir.
