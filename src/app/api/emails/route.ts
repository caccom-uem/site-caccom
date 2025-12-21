import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, ra, email, year, position } = await req.json();

    const safePosition =
      position && position.trim() !== '' ? position : 'Não informado';

    await resend.emails.send({
      from: 'Contato <onboarding@resend.dev>',
      to: ['caccom@uem.br'],
      subject: `Formulário de Filiação`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Registro Acadêmico:</strong> ${ra}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Ano de ingresso:</strong> ${year}</p>
        <p><strong>Cargo de preferência:</strong> ${safePosition}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail: ', error);
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail' },
      { status: 500 }
    );
  }
}
