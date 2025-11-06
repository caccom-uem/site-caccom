export function formatDate(date: string | Date, withTime = false) {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    ...(withTime && { hour: '2-digit', minute: '2-digit' }),
  });
}
