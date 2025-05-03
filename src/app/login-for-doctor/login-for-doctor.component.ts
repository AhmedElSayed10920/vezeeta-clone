import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDoctorService } from '../services/login-doctor.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { DoctorisloggedService } from '../services/doctorislogged.service';

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
    private router: Router,
    private doctorisloggedService: DoctorisloggedService


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

        const doctorId = response.data?.doctorID;

        if (!doctorId || doctorId <= 0) {
          console.error('Invalid doctor ID in login response');
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'حدث خطأ في تسجيل الدخول: بيانات غير مكتملة',
            confirmButtonColor: '#d33',
          });
          return;
        }

        localStorage.setItem('doctorToken', response.token);
        localStorage.setItem('doctorId', doctorId.toString());
        localStorage.setItem('doctorName', response.data.doctorFullName);

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome 🧑‍⚕️🥼👩‍⚕️',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          this.router.navigate(['/doctorDashboard']);
          this.doctorisloggedService.setDoctorLoggedIn(true);

        });
      },
      (error) => {
        console.error('Login failed:', error);

        const message = error.error?.message || 'Login failed. Please try again.';

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: message,
          confirmButtonColor: '#d33',
        });
      }
    );
  }
}
