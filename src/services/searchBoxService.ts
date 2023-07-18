import { HttpClient } from "../lib/api/httpClient";
import { JSONparse, JSONstringify } from "../lib/utils/JSON";
import { hasKeyInLocalStorage } from "../lib/utils/hasKeyInLocalStorage";

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

  saveKeyword(keyword: string) {
    const key: string = 'recentlyKeywords';
    const hasKey = hasKeyInLocalStorage(key);
    let recentlyKeywords: string;
    if (hasKey) {
      const prevKeywords: string[] = JSONparse(localStorage.getItem(key)!);
      const updatedKeywords: string[] = prevKeywords.concat(keyword);
      recentlyKeywords = JSONstringify(updatedKeywords);
    } else {
      recentlyKeywords = JSONstringify([keyword]);
    }
    localStorage.setItem(key, recentlyKeywords);
  }
}