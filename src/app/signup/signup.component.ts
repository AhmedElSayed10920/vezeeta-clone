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
  errorMessage: string = '';
  maxDate: string = '';
  isLoading: boolean = false;

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
      this.errorMessage = 'Please verify the reCAPTCHA.';
      return;
    }

    if (this.user.gender !== 'M' && this.user.gender !== 'F') {
      this.user.gender = 'M';
    }

    if (this.isBirthDateInvalid()) {
      this.errorMessage = 'Birth date cannot be in the future.';
      return;
    }

    this.isLoading = true;

    this.authService.register(this.user, this.captchaToken).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/verify-otp'], {
          state: { email: this.user.email },
        });
      },
      error: (err) => {
        this.isLoading = false;
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
            sitekey: '6LdZKSMrAAAAAFULdVojKK1gt52rhCKu-7YYuQNL',
            callback: (token: string) => {
              this.onCaptchaResolved(token);
            },
          });
        }
      }, 500);
    }
  }

  onCaptchaResolved(token: string) {
    this.captchaToken = token;
  }
}
