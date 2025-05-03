import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

    title = 'HealtCare';
    constructor(private router: Router) {
      this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({
            top: 0,
            behavior: 'auto'
          });
        });
    }
    
}
