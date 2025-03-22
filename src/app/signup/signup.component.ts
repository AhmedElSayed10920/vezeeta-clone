import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    mobile: '',
    email: '',
    gender: '',
    birthDate: '',
    password: '',
    insurance: false,
  };

  formSubmitted = false;

  onSubmit(signupForm: NgForm) {
    this.formSubmitted = true;
    if (signupForm.invalid) {
      return;
    }
    console.log('Form Submitted!', this.user);
  }
}
