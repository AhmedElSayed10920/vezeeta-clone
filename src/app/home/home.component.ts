import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BookingComponent } from '../booking/booking.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { DownloadSectionComponent } from "../download-section/download-section.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BookingComponent, DoctorsComponent, DownloadSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

