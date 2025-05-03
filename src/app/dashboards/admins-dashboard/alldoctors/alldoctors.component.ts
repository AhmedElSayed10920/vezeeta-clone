import { Component } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { BookRequestService } from '../../../services/book-request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../../../shared/image.service';
import { Doctor } from '../../../models/doctor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldoctors',
  imports: [CommonModule,
    FormsModule],
  templateUrl: './alldoctors.component.html',
  styleUrl: './alldoctors.component.css'
})
export class AlldoctorsComponent {
  doctors: any[] = [];
  searchTerm: string = '';

  constructor(private doctorService: DoctorService, private doctorServiceName: BookRequestService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadDoctors();
  }
  getDoctorImage(doctorId: number, doctor: Doctor): string {
    if (doctor.image?.includes('ma7moudsayed-001-site1')) {
      return this.imageService.getImagePath(doctorId.toString());
    } else {
      return doctor.image!;
    }
  }
  loadDoctors(): void {
    this.doctorServiceName.searchByName(this.searchTerm).subscribe(data => {
      this.doctors = data;
    });
  }

  deleteDoctor(doctorId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to recover this doctor!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // إظهار نافذة التحميل عند بدء الحذف
        Swal.fire({
          title: 'Deleting...',
          text: 'Please wait while the doctor is being deleted.',
          icon: 'info',
          showConfirmButton: false,
          allowOutsideClick: false, // منع المستخدم من إغلاق النافذة أثناء الحذف
          willOpen: () => {
            Swal.showLoading();
          }
        });

        // استدعاء خدمة الحذف
        this.doctorService.deleteDoctor(doctorId).subscribe(
          (response) => {
            console.log('Delete successful:', response);  // طباعة الاستجابة للتحقق منها
            this.loadDoctors();  // إعادة تحميل البيانات بعد الحذف
            Swal.fire('Deleted!', 'The doctor has been deleted successfully.', 'success');
          },
          (error) => {
            console.error('Delete error:', error);  // طباعة الخطأ للتحقق منه
            Swal.close();  // إغلاق نافذة التحميل في حالة حدوث خطأ
            Swal.fire('Error!', 'There was an error deleting the doctor.', 'error');
          }
        );
      }
    });
  }


}
