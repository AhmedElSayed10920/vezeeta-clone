import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewDoctorServiceService } from '../../../services/new-doctor-service.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, CommonModule, ReactiveFormsModule],
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctorForm!: FormGroup;
  selectedImage: File | null = null;
  doctorId!: number;
  currentDoctorImage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private doctorService: NewDoctorServiceService
  ) {}

  ngOnInit(): void {
    this.doctorId = +localStorage.getItem('doctorId')!;
    if (!this.doctorId || this.doctorId <= 0) {
      console.error('Invalid doctor ID');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error loading doctor data',
        confirmButtonText: 'OK'
      });
      return;
    }
    this.initForm();
    this.loadDoctorData();
  }

  initForm() {
    this.doctorForm = this.fb.group({
      doctorFullName: [''],
      doctorPhoneNumber: [''],
      doctorSpecialty: [''],
      doctorEmail: [''],
      doctorDegree: [''],
      doctorFees: ['']
    });
  }

  loadDoctorData() {
    this.doctorService.getDoctorProfile().subscribe({
      next: (data) => {
        this.doctorForm.patchValue({
          doctorFullName: data.data?.doctorFullName,
          doctorPhoneNumber: data.data?.doctorPhoneNumber,
          doctorSpecialty: data.data?.doctorSpecialty,
          doctorDegree: data.data?.doctorDegree,
          doctorFees: data.data?.doctorFees
        });
        this.currentDoctorImage = data.data?.doctorImage || '';
        console.log(this.currentDoctorImage); 
      },
      error: (err) => {
        console.error('Error loading doctor data', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to load doctor profile',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
  
      const reader = new FileReader();
      reader.onload = () => {
        this.currentDoctorImage = reader.result as string; 
      };
      reader.readAsDataURL(file);
    }
  }
  

  onSubmit() {
    const formData = new FormData();
    Object.keys(this.doctorForm.controls).forEach(key => {
      formData.append(key, this.doctorForm.get(key)?.value);
    });

    if (this.selectedImage) {
      formData.append('DoctorImage', this.selectedImage);
    }

    this.doctorService.updateDoctor(this.doctorId, formData).subscribe({
      next:() => {
        Swal.fire({
          icon: 'success',
          title: 'Updated',
          text: 'Profile updated successfully',
          confirmButtonText: 'OK'
        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Error updating profile',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
