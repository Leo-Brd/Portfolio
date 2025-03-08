import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { RateLimiterMemory } from 'rate-limiter-flexible';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 60,
});

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.ip;

  try {

    await rateLimiter.consume(ip);

    const { name, email, message } = await request.json();

    const msg = {
      to: 'leobordet.pro@gmail.com',
      from: 'leobordet.pro@gmail.com',
      subject: `Nouveau message de ${name} (${email})`,
      text: `Message de ${name} (${email}):\n\n${message}`,
      html: `<p>Message de ${name} (${email}):</p><p>${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Mail envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    if (error instanceof Error && error.message === 'Rate limiter exceeded') {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du mail' },
      { status: 500 }
    );
  }
}