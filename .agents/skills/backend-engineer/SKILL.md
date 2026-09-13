---
name: backend-engineer
description: Strapi v5 Headless CMS, TypeScript, Document Service API, Custom Controllers, Services, Policies, Middlewares, Lifecycles ve Clean Code standartlarında backend geliştirmeyi yönetir.
---

# Strapi v5 Backend Mühendisi Uzmanlık Rehberi (Backend Engineer Guide)

Bu rehber, **Strapi v5** mimarisinde kurumsal kalitede, yüksek performanslı, güvenli ve TypeScript ile tam uyumlu backend servislerinin geliştirilmesini kapsar.

---

## 📚 1. Dayandığı Literatür ve Standartlar

1. **Clean Code: A Handbook of Agile Software Craftsmanship** (Robert C. Martin - Uncle Bob)
2. **Refactoring: Improving the Design of Existing Code** (Martin Fowler)
3. **Node.js Design Patterns (3rd Edition)** (Mario Casciaro & Luciano Mammino)
4. **Official Strapi v5 Developer Documentation** (Document Service API, Lifecycles, Policies, Plugins)

---

## ⚡ 2. Strapi v5 Document Service API Standartları

Strapi v5 ile gelen `Document Service API`, veri tabanı işlemlerinde standarttır (v4 `entityService` kullanımı kaldırılmıştır):

```typescript
// ✅ Doğru Strapi v5 Document Service Kullanımı
export default ({ strapi }) => ({
  async findPublishedArticles(categorySlug: string) {
    return await strapi.documents('api::article.article').findMany({
      filters: {
        category: { slug: { $eq: categorySlug } }
      },
      status: 'published',
      populate: ['author', 'coverImage'],
      sort: { publishedAt: 'desc' },
      limit: 20,
    });
  },

  async createCustomerOrder(data: CreateOrderDto) {
    return await strapi.documents('api::order.order').create({
      data: {
        orderNumber: data.orderNumber,
        totalAmount: data.totalAmount,
        status: 'pending',
        customer: data.customerId,
      },
      status: 'published',
    });
  }
});
```

---

## 🎯 3. İnce Controller ve Politika (Policy) Mimarisi

1. **İnce Controller Kuralı:**
   - Controller'lar asla doğrudan SQL veya veritabanı sorgusu barındırmaz. Sadece girdi alır, servise devreder ve sanitized çıktı döner:
```typescript
import { factories } from '@strapi/strapi';
import { errors } from '@strapi/utils';

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
  async approveOrder(ctx) {
    const { documentId } = ctx.params;
    if (!documentId) {
      throw new errors.ValidationError('Document ID is required');
    }

    const updatedOrder = await strapi
      .service('api::order.order')
      .approve(documentId, ctx.state.user.id);

    const sanitizedOutput = await this.sanitizeOutput(updatedOrder, ctx);
    return this.transformResponse(sanitizedOutput);
  }
}));
```

2. **Politikalar (Policies) ile Yetkilendirme:**
   - Sahiplik kontrolleri controller yerine rotaya bağlı policy'ler üzerinden yapılır:
```typescript
// src/api/order/policies/is-order-owner.ts
export default async (policyContext, config, { strapi }) => {
  const userId = policyContext.state.user?.id;
  const { documentId } = policyContext.params;

  if (!userId || !documentId) return false;

  const order = await strapi.documents('api::order.order').findOne({
    documentId,
    populate: ['customer']
  });

  return order?.customer?.id === userId;
};
```

---

## 🧼 4. Temel Clean Code İlkeleri

1. **Max 25 Satır Metotlar:** Bir servis fonksiyonu tek bir mantıksal eylemi gerçekleştirmelidir.
2. **Max 3 Parametre:** Parametreler tiplendirilmiş DTO arayüzlerinde toplanmalıdır.
3. **Guard Clauses:** Hata ve yetki durumları fonksiyonun başında kontrol edilip erken çıkılmalıdır.
4. **Sıfır `any`:** Tüm controller ve service dosyaları TypeScript katı tip tanımlamalarına sahip olmalıdır.
