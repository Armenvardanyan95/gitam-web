import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';


import { signIn, googleSignIn, facebookSignIn } from '../../state/actions';
import { GlobalState } from 'src/app/state/types';
import { SignInCredentialsModel as SignInCredentials } from 'src/app/common/models/sigin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDarkMode$ = this.store.select(state => state.preferences.darkMode);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Մուտք Գործել');
  }

  signIn() {
    const payload = this.form.value as SignInCredentials;
    this.store.dispatch(signIn({payload}));
  }

  signInWithGoogle() {
    this.store.dispatch(googleSignIn());
  }

  signInWithFacebook() {
    this.store.dispatch(facebookSignIn());
  }

}
