import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleModel } from '../models/article';
import { Environment } from '../models/environment';
import { List } from '../models/list';
import { ArticleSaveModel } from '../models/article.save';

export interface FeedOptions {
  size: number;
  tags?: string[];
}

interface SearchParams {
  $or: {
    tags: {
      $cont: string
    };
  }[];
}

@Injectable()
export class ArticleService {

  constructor(
    private readonly http: HttpClient,
    private environment: Environment,
  ) { }

  private get baseUrl() {
    return this.environment.baseUrl + 'article/';
  }

  async createArticle(article: ArticleSaveModel): Promise<ArticleModel> {
    return this.http.post<ArticleModel>(this.baseUrl, article).toPromise();
  }

  async updateArticle(article: ArticleSaveModel, id: number): Promise<void> {
    return this.http.patch<void>(this.baseUrl + id.toString(), article).toPromise();
  }

  async getBookmarked() {
    const bookmarked = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    return bookmarked;
  }

  async getArticles(page: number, size: number, title = ''): Promise<List<ArticleModel>> {
    let params = new HttpParams()
                      .append('fields', 'title,createdAt')
                      .append('join', 'author||fullName')
                      .append('per_page', size.toString())
                      .append('sort', 'createdAt,DESC')
                      .append('page', page.toString());
    if (title !== '') {
      params = params.append('filter', `title||cont||${title}`);
    }

    return this.http.get<List<ArticleModel>>(this.baseUrl, {params}).toPromise();
  }

  getFeed(page: number, options: FeedOptions): Observable<List<ArticleModel>> {
    let params = new HttpParams()
                      .append('fields', 'title,createdAt,image,tags')
                      .append('join', 'author||fullName')
                      .append('per_page', (options.size || 10).toString())
                      .append('sort', 'createdAt,DESC')
                      .append('page', page.toString());
    if (options.tags && options.tags.length > 0) {
      const search: SearchParams = {
        $or: options.tags.map(tag => ({tags: {$cont: tag}})),
      };
      params = params.append('s', JSON.stringify(search));
      // searchObject.
      // params = params.se('filter', `tags||cont||${options.tags[0]}`);

      // options.tags.slice(1, options.tags.length).forEach(tag => {
      //   params = params.append('or', `tags||cont||${tag}`);
      // });
    }

    return this.http.get<List<ArticleModel>>(this.baseUrl, {params});
  }

  async deleteArticle(id: number): Promise<void> {
    return this.http.delete<void>(this.baseUrl + id.toString()).toPromise();
  }

  getArticle(id: number): Observable<ArticleModel> {
    const params = new HttpParams().append('join', 'author||fullName');
    return this.http.get<ArticleModel>(this.baseUrl + id.toString(), {params});
  }

  getAllTags(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + 'tags');
  }

  async uploadImage(file: File, id): Promise<void> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<void>(this.baseUrl + `add-image/${id}` , formData).toPromise();
  }

  async signFileAWS(file: File) {
    return this.http.get<any>(this.baseUrl + `sign-s3?file-name=${file.name}&file-type=${file.type}`).toPromise();
  }

  async uploadFile(file: File, signedRequest: string): Promise<void> {
    // return this.http.put<void>(signedRequest, file, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append(InterceptorSkipHeader, ''),
    // }).toPromise();
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject();
          }
        }
      };
      xhr.send(file);
    });
  }
}
