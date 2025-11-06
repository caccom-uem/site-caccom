export function getStrapiUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  return `${base}${path}`;
}
