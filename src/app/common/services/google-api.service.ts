import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Environment } from '../models/environment';
import {
  SignInWithSocialMediaCredentialsModel as SignInWithSocialMediaCredentials
} from '../models/sigin.model';

/// <reference types="gapi" />

declare let gapi: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  auth; // : gapi.auth2.GoogleAuth;
  constructor(
    private readonly environment: Environment,
  ) {
    this.loadAuth();
  }

  signIn() {
    return from<Promise<SignInWithSocialMediaCredentials>>(
      this.auth.signIn()
              .then(user => [user.getBasicProfile(), user.getAuthResponse()] as const)
              .then(([profile, authResponse]) => ({
                fullName: profile.getName(),
                email: profile.getEmail(),
                token: authResponse.id_token,
              })),
    );
  }

  private loadAuth() {
    gapi.load('auth2', () => {
      gapi.auth2.init({client_id: this.environment.google.clientId})
                .then(auth => this.auth = auth);
    });
  }
}
