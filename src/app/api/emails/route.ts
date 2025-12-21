import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { validateRequiredFields } from '@/src/utils/validateRequiredFields';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const requiredFields = ['name', 'ra', 'email', 'year'];
    const missingFields = validateRequiredFields(body, requiredFields);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios ausentes',
          fields: missingFields,
        },
        { status: 400 }
      );
    }

    const { name, ra, email, year, position } = body;

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
