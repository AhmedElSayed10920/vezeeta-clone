import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2'; // استيراد SweetAlert2

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  private auth = inject(AuthLoginService);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  onlogin() {
    console.log('🚀 Sending login request...', this.user);

    const otpVerified = localStorage.getItem('otpVerified') === 'true';

    if (!otpVerified) {
      // عرض SweetAlert2 مع زر OK الذي يوجه إلى صفحة إدخال الـ OTP
      Swal.fire({
        icon: 'warning',
        title: '⚠️ OTP Verification Required',
        text: 'You must verify your OTP before logging in.',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          // إذا تم الضغط على OK، يتم التوجيه إلى صفحة الـ OTP
          this.router.navigate(['/verify-otp']); // استبدل '/otp' بالمسار الصحيح لصفحة إدخال OTP
        }
      });
      return;
    }

    this.auth.onlogin(this.user).subscribe({
      next: (res: any) => {
        console.log('✅ Response:', res);

        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem(
            'user',
            JSON.stringify({
              id: res.patient.pid,
              name: res.patient.pname,
              phone: res.patient.pphone,
              email: res.patient.pemail,
            })
          );
          localStorage.setItem('username', res.patient.pname);
          console.log('🔑 Token Saved!');

          this.tokenService.setUsername(res.patient.pname);

          this.router.navigate(['/']);
        } else {
          console.warn('⚠️ No token received, check API response.');
        }
      },
      error: (err: any) => {
        console.error('❌ Login Error:', err);
        console.error('📌 Error Status:', err.status);
        console.error('📌 Error Message:', err.message);
        console.error('📌 Full Error:', err);
      },
    });
  }
}
