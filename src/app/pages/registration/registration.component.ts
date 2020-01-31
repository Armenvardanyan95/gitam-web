import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from 'src/app/common/services/auth.service';
import { User } from 'src/app/common/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  }, {validators: [control => control.value.password === control.value.confirmPassword ? null : {passwordsDontMatch: true}]});
  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Գրանցվել');
  }

  async submit() {
    if (this.form.valid) {
      this.loading = true;
      try {
        await this.authService.signUp(this.form.value as User);
        this.router.navigateByUrl('/login');
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }

}
