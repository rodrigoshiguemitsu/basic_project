import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { 
  NbInputModule, 
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    NbInputModule,
    NbLayoutModule,
    NbButtonModule
  ]
})
export class RegisterModule { }
