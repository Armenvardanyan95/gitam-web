import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Environment } from '../models/environment';
import { User } from '../models/user';

interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly environment: Environment,
  ) { }

  get baseUrl() {
    return `${this.environment.baseUrl}auth/`;
  }

  get userUrl() {
    return `${this.environment.baseUrl}user/`;
  }

  async signIn(payload: {email: string, password: string}): Promise<Token> {
    return this.http.post<Token>(this.baseUrl + 'signin', payload).toPromise();
  }

  async signUp(payload: User): Promise<unknown> {
    return this.http.post<void>(this.userUrl, {...payload, type: 1}).toPromise();
  }
}
