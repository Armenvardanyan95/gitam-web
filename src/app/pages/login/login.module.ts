import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoginComponent } from './login.component';
import { GoogleApiService } from 'src/app/common/services/google-api.service';
import { FacebookApiService } from 'src/app/common/services/facebook-api.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
