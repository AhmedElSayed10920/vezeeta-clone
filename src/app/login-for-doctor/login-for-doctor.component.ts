import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDoctorService } from '../services/login-doctor.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-for-doctor',
  standalone: true,
  templateUrl: './login-for-doctor.component.html',
  styleUrls: ['./login-for-doctor.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginForDoctorComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginDoctorService: LoginDoctorService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginData = this.loginForm.value;

    this.loginDoctorService.loginDoctor(loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);

        localStorage.setItem('doctorId', response.DoctorId);
        localStorage.setItem('doctorName', response.DoctorName);

        alert('Login successful! Welcome  🧑‍⚕️🥼👩‍⚕️');

        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password.');
      }
    );
  }
}
