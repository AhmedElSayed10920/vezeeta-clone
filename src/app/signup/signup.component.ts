
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthRegisterService } from '../services/auth-register.service';
import { Router } from '@angular/router';

declare var window: any;
declare var grecaptcha: any;

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
    gender: 'M',
    birthDate: '',
    location: '',
    password: '',
  };
  captchaToken: string = '';
  showCaptcha: boolean = true;

  onCaptchaResolved(token: string) {
    this.captchaToken = token;
  }

  errorMessage: string = '';
  maxDate: string = '';

  constructor(
    private authService: AuthRegisterService,
    private router: Router
  ) {
    this.setMaxDateToToday();
  }

  setMaxDateToToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.maxDate = `${year}-${month}-${day}`;
  }

  isBirthDateInvalid(): boolean {
    if (!this.user.birthDate) return false;
    const selected = new Date(this.user.birthDate);
    const today = new Date();
    selected.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return selected > today;
  }

  register() {

    if (!this.captchaToken) {
      alert('Please verify the reCAPTCHA.');
      return;
    }

    if (this.user.gender !== 'M' && this.user.gender !== 'F') {
      this.user.gender = 'M';
    }

    if (this.isBirthDateInvalid()) {
      alert('Birth date cannot be in the future.');
      return;
    }

    console.log('Sending user data:', this.user);

    this.authService.register(this.user, this.captchaToken).subscribe({
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
  ngOnInit() {
    window.onRecaptchaSuccess = (token: string) => {
      this.onCaptchaResolved(token);
    };
  }
  ngAfterViewInit() {
    if (this.showCaptcha) {
      setTimeout(() => {
        const recaptchaEl = document.querySelector('.g-recaptcha');
        if (recaptchaEl) {
          grecaptcha.render(recaptchaEl, {
            sitekey: '6Ld7XBorAAAAANMQY-FKhCQ1xGhD-QsJuPmFczMD',
            callback: (token: string) => {
              this.onCaptchaResolved(token);
            },
          });
        }
      }, 500);
    }
  }
}
