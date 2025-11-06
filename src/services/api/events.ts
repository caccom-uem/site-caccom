import { Api } from '.';
import { StrapiResponse } from '@/src/interfaces/strapi';
import { Event } from '@/src/interfaces/event';

export class EventsApi extends Api {
  constructor() {
    super('/eventos');
  }

  async getEvents(
    page: number,
    pageSize: number
  ): Promise<StrapiResponse<Event>> {
    const response = await this.api.get<StrapiResponse<Event>>(
      `?populate=imagem&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );
    return response.data;
  }
}
