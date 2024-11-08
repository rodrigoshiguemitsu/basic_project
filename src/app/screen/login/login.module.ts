import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import {
  NbInputModule,
    NbLayoutModule,
    NbButtonModule
} from '@nebular/theme'



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NbInputModule,
    NbLayoutModule,
    NbButtonModule
  ]
})
export class LoginModule { }
