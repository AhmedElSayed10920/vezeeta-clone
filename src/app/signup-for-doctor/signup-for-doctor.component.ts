import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-for-doctor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup-for-doctor.component.html',
  styleUrl: './signup-for-doctor.component.css',
})
export class SignupForDoctorComponent {
  signupForm: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
        ],
      ],
      specialty: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    return control?.invalid && control?.touched ? true : false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result ?? null;
      };
      reader.readAsDataURL(file);
    }
  }
}
