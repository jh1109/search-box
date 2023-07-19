import { HttpClient } from '../lib/api/httpClient';
import { Keyword } from '../lib/interfaces/keyword';
import { JSONparse, JSONstringify } from '../lib/utils/JSON';

export class SearchBoxService {
  httpClient;
  key;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.key = 'recentlyKeywords' as const;
  }

  async postRecommandSearchWord(value: string) {
    try {
      const response = await this.httpClient.fetch(`?q=${value}`);
      if (!response.ok) {
        throw new Error('Error!');
      }
      return response.json();
    } catch (error: any) {
      alert(error.message);
    }
  }

  saveKeyword(hasKey: boolean, keyword: string) {
    let recentlyKeywords: string;
    if (hasKey) {
      const prevKeywords: Keyword[] = JSONparse(
        localStorage.getItem(this.key)!,
      );
      const updatedKeywords: Keyword[] = prevKeywords.concat({
        sickCd: Math.random().toString(),
        sickNm: keyword,
      });
      recentlyKeywords = JSONstringify(updatedKeywords);
    } else {
      recentlyKeywords = JSONstringify([
        { sickCd: Math.random().toString(), sickNm: keyword },
      ]);
    }
    localStorage.setItem(this.key, recentlyKeywords);
  }

  getKeywords() {
    return JSONparse(localStorage.getItem(this.key));
  }
}
