import { StrapiImage } from './strapi';

export interface Event {
  id: number;
  titulo: string;
  descricao: string;
  finalizado: boolean;
  data_inicio?: string;
  data_fim?: string;
  link: string;
  imagem: StrapiImage;
}
