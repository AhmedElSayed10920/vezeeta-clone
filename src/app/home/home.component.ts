import { Component} from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BookingComponent } from '../booking/booking.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { OfferListComponent } from "../offer-list/offer-list.component";
import { BookSpecialtiesComponent } from "../book-specialties/book-specialties.component";
import { DownloadSectionComponent } from "../download-section/download-section.component";
import { MedicalQuestionComponent } from '../medical-question/medical-question.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BookingComponent, DoctorsComponent, OfferListComponent, BookSpecialtiesComponent, DownloadSectionComponent, MedicalQuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

