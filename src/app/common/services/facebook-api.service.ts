import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  SignInWithSocialMediaCredentialsModel as SignInWithSocialMediaCredentials
} from '../models/sigin.model';

declare const FB: any;

@Injectable({
  providedIn: 'root',
})
export class FacebookApiService {

  constructor() {
    /* tslint:disable-next-line:only-arrow-functions */
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '802292457194900',
        cookie     : true,
        xfbml      : true,
        version    : 'v8.0'
      });

      FB.AppEvents.logPageView();

    };

    /* tslint:disable-next-line:only-arrow-functions */
    (function(d, s, id) {
      /* tslint:disable-next-line:one-variable-per-declaration prefer-const no-var-keyword*/
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = 'https://connect.facebook.net/en_US/sdk.js';
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  signIn() {
    return new Observable<SignInWithSocialMediaCredentials>(observer => FB.login(
      (response) => {
        if (response.authResponse) {
          FB.api(
            response.authResponse.userID,
            {fields: 'email,name', access_token: response.authResponse.accessToken},
            (userResponse) => {
              if (userResponse && !userResponse.error && userResponse.email) {
                observer.next({
                  fullName: userResponse.name,
                  token: response.authResponse.signedRequest,
                  email: userResponse.email,
                });
              }
            }
        );
        } else {
          observer.error();
        }
      },
      {scope: 'public_profile,email'},
    ));
  }
}
