import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  url: string = '';
  keywordUrl: string = 'https://api.themoviedb.org/3/search/keyword';
  key: string = '774dc051d9e43ff6c87c14a756a1fabc';
  constructor(private http: HttpClient) {}

  getKeywords = (keyword: string): any => {
    return this.http.get(this.keywordUrl, {
      params: {
        api_key: this.key,
        query: keyword,
      },
    });
  };
}
