import { z } from 'zod';

export function validateRequiredFields(
  data: Record<string, unknown>,
  fields: string[]
): string[] {
  const schema = z.object(
    Object.fromEntries(
      fields.map((field) => [
        field,
        z
          .any()
          .refine(
            (value) => value !== undefined && value !== null && value !== '',
            { message: 'Campo obrigatório' }
          ),
      ])
    )
  );

  const result = schema.safeParse(data);

  if (result.success) {
    return [];
  }

  return Object.keys(result.error.flatten().fieldErrors);
}
