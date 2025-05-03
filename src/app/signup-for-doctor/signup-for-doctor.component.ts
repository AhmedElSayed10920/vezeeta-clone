import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RegisterDoctorService } from '../services/register-doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-for-doctor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './signup-for-doctor.component.html',
  styleUrls: ['./signup-for-doctor.component.css'],
})
export class SignupForDoctorComponent {
  signupForm: FormGroup;
  profileImage: File | null = null;
  certificateImage: File | null = null;
  profileImagePreview: string | null = null;

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
      gender: ['Male', Validators.required],
      degree: ['', Validators.required],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        Swal.fire('File too large', 'Please select an image under 1MB.', 'warning');
        return;
      }

      this.profileImage = file;

      // ✅ قراءة الصورة وعرضها
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImagePreview = reader.result as string; // استخدم متغير جديد للعرض
      };
      reader.readAsDataURL(file);
    }
  }


  onCertificateSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.certificateImage = file;
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = new FormData();
      formData.append('DoctorFullName', this.signupForm.value.FullName);
      formData.append('DoctorGender', this.signupForm.value.gender);
      formData.append('DoctorDegree', this.signupForm.value.degree);
      formData.append('DoctorPhoneNumber', this.signupForm.value.mobileNumber);
      formData.append('DoctorEmail', this.signupForm.value.email);
      formData.append('DoctorPassword', this.signupForm.value.password);
      formData.append('DoctorSpecialty', this.signupForm.value.specialty);
      formData.append('Governorate', this.signupForm.value.governorate);
      formData.append('City', this.signupForm.value.city);
      formData.append('Street', this.signupForm.value.street);


      if (this.profileImage) {
        formData.append('DoctorImageFile', this.profileImage);
      }
      if (this.certificateImage) {
        formData.append('DoctorCertificateFile', this.certificateImage);
      }


      this.registerDoctorService.registerDoctor(formData).subscribe(
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
          const errorMsg = error.error?.message || 'An error occurred while creating your account. Please try again.';
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed!',
            text: errorMsg,
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
}
