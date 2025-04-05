import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BookingComponent } from '../booking/booking.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { AllDoctorsComponent } from '../all-doctors/all-doctors.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BookingComponent,DoctorsComponent,DoctorDetailsComponent,AllDoctorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

