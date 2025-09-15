import axios, { AxiosInstance } from 'axios';

export class Api {
  public api: AxiosInstance;

  constructor(base_url: string) {
    const api_url = process.env.API_URL ?? 'http://localhost:1337/api';
    this.api = axios.create({
      baseURL: `${api_url}${base_url}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
