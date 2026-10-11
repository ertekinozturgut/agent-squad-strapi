import { describe, it, expect } from 'vitest';
import { POST } from '../../src/app/api/contact/route';

describe('TASK-10: Contact Route Handler API & Validation (OWASP ASVS)', () => {
  it('should accept valid contact requests and return 200 with success message', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Kerem Demir',
        email: 'kerem.demir@enterprise.com',
        message: 'Kurumsal yapay zeka ajan mimarisi üzerine danışmanlık talep ediyoruz.',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const json = await response.json();
    expect(json.success).toBe(true);
    expect(json.message).toContain('başarıyla iletildi');
  });

  it('should reject invalid email format with 400 Bad Request', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Kerem Demir',
        email: 'invalid-email-format',
        message: 'Yapay zeka projesi hakkında bilgi almak istiyorum.',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const json = await response.json();
    expect(json.success).toBe(false);
    expect(json.error).toContain('geçerli bir e-posta');
  });

  it('should reject too short messages with 400 Bad Request', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Kerem Demir',
        email: 'kerem@example.com',
        message: 'Kısa',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const json = await response.json();
    expect(json.success).toBe(false);
    expect(json.error).toContain('en az 10 karakter');
  });
});
