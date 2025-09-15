import { Api } from '.';
import { StrapiResponse } from '@/src/interfaces/strapi';
import { News } from '@/src/interfaces/news';

export class NewsApi extends Api {
  constructor() {
    super('/news');
  }

  async getNews(): Promise<StrapiResponse<News>> {
    const { data } = await this.api.get<StrapiResponse<News>>('/');
    return data;
  }
}
