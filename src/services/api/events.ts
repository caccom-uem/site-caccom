import { Api } from '.';
import { StrapiResponse } from '@/src/interfaces/strapi';
import { Event } from '@/src/interfaces/event';

export class EventsApi extends Api {
  constructor() {
    super('/events');
  }

  async getEvents(): Promise<StrapiResponse<Event>> {
    const { data } =
      await this.api.get<StrapiResponse<Event>>('?populate=imagem');
    return data;
  }
}
