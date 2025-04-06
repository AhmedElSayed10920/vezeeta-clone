import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BookingComponent } from '../booking/booking.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { OfferListComponent } from "../offer-list/offer-list.component";
import { BookSpecialtiesComponent } from "../book-specialties/book-specialties.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, BookingComponent, DoctorsComponent, OfferListComponent, BookSpecialtiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

