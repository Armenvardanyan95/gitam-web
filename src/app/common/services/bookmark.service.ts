import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Environment } from '../models/environment';
import { ArticleModel } from '../models/article';
import { Bookmark } from 'src/app/state/actions';
import { User } from '../models/user';

export interface RawBookmark {
  createdAt: string;
  owner: User;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(
    private readonly http: HttpClient,
    private readonly environment: Environment,
  ) { }

  getBookmarks() {
    return this.http.get<{article: Omit<ArticleModel, 'text'>, id: number}[]>(this.environment.baseUrl + 'bookmark');
  }

  addBookmark(articleId: number) {
    return this.http.post<RawBookmark>(this.environment.baseUrl + 'bookmark', {articleId});
  }

  deleteBookmark(bookmarkId: number) {
    return this.http.delete(this.environment.baseUrl + 'bookmark/' + bookmarkId.toString());
  }
}
