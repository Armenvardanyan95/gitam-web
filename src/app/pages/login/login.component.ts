import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthService } from '../../common/services/auth.service';
import { signIn, signInFailure } from '../../state/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly store: Store<unknown>,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Մուտք Գործել');
  }

  async signIn() {
    try {
      const { token } = await this.authService.signIn(this.form.value);
      localStorage.setItem('token', token);
      this.store.dispatch(signIn());
      await this.router.navigateByUrl('/');
    } catch (error) {
      console.error('Error', error);
      this.store.dispatch(signInFailure());
    }
  }

}
