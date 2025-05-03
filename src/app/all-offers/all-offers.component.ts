import { Component, HostListener } from '@angular/core';
import { SlidesComponent } from "./slides/slides.component";
import { TrendingNowComponent } from "./trending-now/trending-now.component";
import { TheMostRequestedComponent } from "./the-most-requested/the-most-requested.component";
import { NavbarOffersComponent } from "./navbar-offers/navbar-offers.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-offers',
  imports: [SlidesComponent, TrendingNowComponent, TheMostRequestedComponent, NavbarOffersComponent,RouterLink,CommonModule],
  templateUrl: './all-offers.component.html',
  styleUrl: './all-offers.component.css'
})
export class AllOffersComponent {

    showScrollTop = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showScrollTop = window.scrollY > 200;
}

scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
