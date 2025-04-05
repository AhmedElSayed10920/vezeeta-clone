import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthLoginService } from '../services/auth-login.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule, RouterModule] 
})
export class LoginComponent {
  user = { email: '', password: '' };

  private auth = inject(AuthLoginService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    console.log('Form Status:', form);
    console.log('User Input:', this.user);

    if (form.invalid) {
      Object.values(form.controls).forEach((control) => control.markAsTouched());
      return;
    }

    console.log('✅ Form is valid, sending login request...');
    this.onlogin(); // ✅ استدعاء `onlogin()` بعد التأكد من صحة النموذج
  }
  onlogin() {
    console.log('🚀 Sending login request...', this.user);

    this.auth.onlogin(this.user).subscribe({
      next: (res: any) => {
        console.log('✅ API Response:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log('🔑 Token Saved!');
          this.router.navigate(['/home']);
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
