import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RegisterDoctorService } from '../services/register-doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-for-doctor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup-for-doctor.component.html',
  styleUrls: ['./signup-for-doctor.component.css'],
})
export class SignupForDoctorComponent {
  signupForm: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private registerDoctorService: RegisterDoctorService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      FullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z\s]+$/),
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
      const doctorData = {
        dName: this.signupForm.value.FullName,
        dGender: 'M',
        dDegree: 'Ph.D. in Medicine',
        dProfileImage: this.profileImage ?? '',
        sid: 1,
        dFees: 500,
        subSID: 5,
        mobileNumber: this.signupForm.value.mobileNumber,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        dSpecialization: this.signupForm.value.specialty,
      };

      this.registerDoctorService.registerDoctor(doctorData).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'Your account has been created. You will now be redirected to the login page.',
            confirmButtonText: 'OK',
          }).then(() => {
            this.router.navigate(['/loginForDoctor']);
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed!',
            text: 'An error occurred while creating your account. Please try again.',
          });
        }
      );
    } else {
      this.signupForm.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fill out all fields correctly before submitting.',
      });
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
