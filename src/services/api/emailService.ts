import { Email } from '@/src/interfaces/email';

export async function sendEmail(data: Email) {
  return fetch('/api/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
