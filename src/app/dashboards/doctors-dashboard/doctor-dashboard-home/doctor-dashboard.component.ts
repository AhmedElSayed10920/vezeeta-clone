import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppointmentsListDoctorsComponent } from "../appointments-list-doctors/appointments-list-doctors.component";
import { ManageAppointmentsDoctorsComponent } from "../manage-appointments-doctors/manage-appointments-doctors.component";
import { ReviewsDoctorsComponent } from "../reviews-doctors/reviews-doctors.component";
import { DoctorProfileComponent } from "../doctor-profile/doctor-profile.component";
import { ClinicOffersComponent } from "../clinic-offers/clinic-offers.component";

@Component({
  selector: 'app-doctor-dashboard',
  imports: [MatTabsModule, AppointmentsListDoctorsComponent, ManageAppointmentsDoctorsComponent, ReviewsDoctorsComponent, DoctorProfileComponent, ClinicOffersComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorDashboardComponent {

}
