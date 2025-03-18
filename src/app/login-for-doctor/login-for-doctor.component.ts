import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-for-doctor',
  standalone: true,
  templateUrl: './login-for-doctor.component.html',
  styleUrls: ['./login-for-doctor.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginForDoctorComponent {
  loginForm: FormGroup;
  showPassword = signal(false);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{6,}$'),
        ],
      ],
    });
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log('✅ Login Successful:', this.loginForm.value);
  }
}
