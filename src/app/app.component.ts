import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BookingComponent } from './booking/booking.component';
import { filter } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vezeeta';
  // currentUrl: string = '';

  // constructor(private router: Router) {
  //   // Listen to route changes
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: any) => {
  //       this.currentUrl = event.urlAfterRedirects;
  //     });
  // }

  // get showHeroAndBooking(): boolean {
  //   return this.currentUrl === '/';
  // }
}
