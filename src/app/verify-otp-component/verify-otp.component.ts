import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../services/otp.service';
import Swal from 'sweetalert2'; // استيراد SweetAlert2
import { CommonModule } from '@angular/common'; // إضافة CommonModule

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule], // إضافة CommonModule هنا
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent {
  otpDigits: string[] = ['', '', '', '', '', ''];
  email: string = '';
  errorMessage: string = '';
  success: boolean = false;
  isOtpVerified: boolean = false;

  @ViewChildren('otp0, otp1, otp2, otp3, otp4, otp5')
  otpInputs!: QueryList<ElementRef>;

  constructor(private otpService: OtpService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { email?: string };
    this.email = state?.email || '';
  }

  verifyOtp() {
    const otp = this.otpDigits.join('');
    if (otp.length !== 6 || !this.email) {
      this.errorMessage = 'Please enter the complete 6-digit OTP.';
      this.triggerAnimation('error-border');
      return;
    }

    this.otpService.verifyOtp(this.email, otp).subscribe({
      next: () => {
        this.success = true;
        this.isOtpVerified = true;
        this.errorMessage = '';
        this.triggerAnimation('success-border');
        Swal.fire({
          icon: 'success',
          title: '✅ OTP Verified Successfully!',
          text: 'Your OTP has been verified.',
          confirmButtonText: 'OK',
        }).then(() => {
          localStorage.setItem('otpVerified', 'true');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        });
      },
      error: () => {
        this.errorMessage = 'OTP verification failed. Please try again.';
        this.triggerAnimation('error-border');
        this.isOtpVerified = false;
        localStorage.removeItem('otpVerified');

        Swal.fire({
          icon: 'error',
          title: '❌ OTP Verification Failed',
          text: 'Please check your OTP and try again.',
          confirmButtonText: 'Retry',
        });

        setTimeout(() => {
          this.otpDigits = ['', '', '', '', '', ''];
          this.otpInputs.forEach((input) => {
            input.nativeElement.value = '';
          });
          this.otpInputs.first?.nativeElement.focus();
        }, 1500);
      },
    });
  }

  triggerAnimation(className: string) {
    this.otpInputs.forEach((input) => {
      const el = input.nativeElement;
      el.classList.add('shake', className);
      setTimeout(() => {
        el.classList.remove('shake', className);
      }, 1000);
    });
  }

  onInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (!/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otpDigits[index] = value;

    if (index < 5) {
      const nextInput = this.otpInputs.toArray()[index + 1];
      nextInput?.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      if (this.otpDigits[index]) {
        this.otpDigits[index] = '';
      } else if (index > 0) {
        const prevInput = this.otpInputs.toArray()[index - 1];
        prevInput?.nativeElement.focus();
        this.otpDigits[index - 1] = '';
      }
    }

    if (!/^[0-9]$/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const data = event.clipboardData?.getData('text') || '';
    const digits = data.replace(/\D/g, '').slice(0, 6).split('');

    digits.forEach((digit, i) => {
      this.otpDigits[i] = digit;
      const input = this.otpInputs.toArray()[i];
      if (input) {
        input.nativeElement.value = digit;
      }
    });

    const next = this.otpInputs.toArray()[digits.length];
    next?.nativeElement.focus();
  }
}
