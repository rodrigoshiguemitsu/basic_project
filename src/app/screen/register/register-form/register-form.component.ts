import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm: FormGroup;

  constructor(
    private router:Router,
    private fb: FormBuilder) {
    // Criando o formulário reativo
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]  // Checkbox para lembrar usuário
    });
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
