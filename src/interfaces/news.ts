import { StrapiImage } from './strapi';

export interface News {
  titulo: string;
  descricao: string;
  link: string;
  data: string;
  imagem: StrapiImage;
}
