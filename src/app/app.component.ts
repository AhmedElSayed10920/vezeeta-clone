import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferListComponent } from "./offer-list/offer-list.component";
import { BookSpecialtiesComponent } from "./book-specialties/book-specialties.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OfferListComponent, BookSpecialtiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vezeeta';
}
