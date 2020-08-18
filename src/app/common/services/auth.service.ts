import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Environment } from '../models/environment';
import { User } from '../models/user';
import {
  SignInCredentialsModel as SignInCredentials,
  SignInWithSocialMediaCredentialsModel as SignInWithSocialMediaCredentials,
} from '../models/sigin.model';

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

  signIn(credentials: SignInCredentials): Observable<Token> {
    return this.http.post<Token>(this.baseUrl + 'signin', credentials);
  }

  signInWithGoogle(credentials: SignInWithSocialMediaCredentials): Observable<Token> {
    return this.http.post<Token>(this.baseUrl + 'signin-google', credentials);
  }

  signInWithFacebook(credentials: SignInWithSocialMediaCredentials): Observable<Token> {
    return this.http.post<Token>(this.baseUrl + 'signin-facebook', credentials);
  }

  async signUp(payload: User): Promise<unknown> {
    return this.http.post<void>(this.userUrl, {...payload, type: 1}).toPromise();
  }
}
