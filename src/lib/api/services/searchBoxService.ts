import { HttpClient } from "../httpClient";

export class SearchBoxService {
  httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async postRecommandSearchWord(value: string) {
    try {
      const response = await this.httpClient.fetch(`?q=${value}`);
      if (!response.ok) {
        throw new Error('Error!')
      }
      return response.json();
    } catch (error: any) {
      alert(error.message);
    }
  }
}