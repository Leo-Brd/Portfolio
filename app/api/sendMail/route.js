import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const msg = {
      to: 'leobordet.pro@gmail.com',
      from: 'leobordet.pro@gmail.com',
      subject: `Nouveau message de ${name} (${email})`,
      text: `Message de ${name} (${email}):\n\n${message}`,
      html: `<p>Message de ${name} (${email}):</p><p>${message}</p>`,
    };

    // Envoyer le mail
    await sgMail.send(msg);

    // Réponse JSON en cas de succès
    return NextResponse.json(
      { message: 'Mail envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    // Réponse JSON en cas d'erreur
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du mail' },
      { status: 500 }
    );
  }
}