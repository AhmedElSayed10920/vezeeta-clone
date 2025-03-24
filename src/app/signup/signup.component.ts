import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { AuthRegisterService } from '../services/auth-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    gender: 'M', // القيمة الافتراضية
    birthDate: '',
    location: '',
    password: '',
  };

  errorMessage: string = '';

  constructor(
    private authService: AuthRegisterService,
    private router: Router
  ) {}

  register() {
    // تأكيد أن قيمة gender هي 'M' أو 'F' فقط
    if (this.user.gender !== 'M' && this.user.gender !== 'F') {
      this.user.gender = 'M'; // تعيين القيمة الافتراضية إذا لم تكن صحيحة
    }

    console.log('Sending user data:', this.user); // لتأكيد القيم المرسلة

    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', err);
      },
    });
  }
}
