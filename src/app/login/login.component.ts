import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  user = { email: '', password: '' };

  onSubmit(form: NgForm) {
    console.log('Form Status:', form);
    console.log('User Input:', this.user);

    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    console.log('✅ Login successful', this.user);
  }
}
