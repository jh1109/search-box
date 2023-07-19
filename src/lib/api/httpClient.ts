export class HttpClient {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  fetch(endPoint: string, options: any = {}) {
    const optionsWithDefault = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    return window.fetch(this.baseURL + endPoint, optionsWithDefault);
  }
}
