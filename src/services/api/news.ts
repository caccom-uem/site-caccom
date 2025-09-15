import { Api } from '.';
import { StrapiResponse } from '@/src/interfaces/strapi';
import { News } from '@/src/interfaces/news';

export class NewsApi extends Api {
  constructor() {
    super('/noticias');
  }

  async getNews(page: number = 1): Promise<StrapiResponse<News>> {
    const response = await this.api.get<StrapiResponse<News>>(
      `?populate=imagem&pagination[page]=${page}`
    );
    return response.data;
  }
}
