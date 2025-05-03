import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewDoctorServiceService } from '../../../services/new-doctor-service.service';
import { Offer } from '../../../models/offer'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clinic-offers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clinic-offers.component.html',
  styleUrl: './clinic-offers.component.css'
})
export class ClinicOffersComponent implements OnInit {

  offer: Offer = {
    DoctorID: 0,
    OTitle: '',
    ODescription: '',
    ODiscount: 0,
    OStartDate: '',
    OEndDate: '',
    OImg: '',
    OPrice: 0,
    OFinalPrice: 0
  };
  

  constructor(private offerService: NewDoctorServiceService) {}

  ngOnInit(): void {
    const doctorId = localStorage.getItem('doctorId');
    if (doctorId) {
      this.offer.DoctorID = +doctorId; // تخزين DoctorId في CID
    } else {
      alert("No doctor ID found in local storage.");
    }
  }

  onSubmit() {
    this.offerService.addOffer(this.offer).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Offer Added',
          text: ' Offer Added successfully 🎉',
          confirmButtonColor: '#3085d6'
        });
  
        // Reset form fields
        this.offer = {
          DoctorID: this.offer.DoctorID, // نحتفظ بالـ DoctorID
          OTitle: '',
          ODescription: '',
          ODiscount: 0,
          OStartDate: '',
          OEndDate: '',
          OImg: '',
          OPrice: 0,
          OFinalPrice: 0
        };
      },
      error: err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء إضافة العرض',
          confirmButtonColor: '#d33'
        });
      }
    });
  }
  
}
