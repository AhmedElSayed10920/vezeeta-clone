import { Component } from '@angular/core';
import { SlidesComponent } from "./slides/slides.component";
import { TrendingNowComponent } from "./trending-now/trending-now.component";
import { TheMostRequestedComponent } from "./the-most-requested/the-most-requested.component";
import { NavbarOffersComponent } from "./navbar-offers/navbar-offers.component";

@Component({
  selector: 'app-all-offers',
  imports: [SlidesComponent, TrendingNowComponent, TheMostRequestedComponent, NavbarOffersComponent],
  templateUrl: './all-offers.component.html',
  styleUrl: './all-offers.component.css'
})
export class AllOffersComponent {

}
