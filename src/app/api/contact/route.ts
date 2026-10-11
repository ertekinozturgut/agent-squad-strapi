import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Strict input validation (Rule 03 & OWASP ASVS)
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Lütfen geçerli bir isim ve soyisim giriniz.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Lütfen geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Mesajınız en az 10 karakterden oluşmalıdır.' },
        { status: 400 }
      );
    }

    // In a production setup, dispatch via Resend, SendGrid or Strapi Document Service API
    // e.g. await sendEmail({ name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız başarıyla iletildi. En kısa sürede geri dönüş yapılacaktır.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'İstek işlenirken beklenmeyen bir hata oluştu.' },
      { status: 500 }
    );
  }
}
