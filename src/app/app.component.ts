//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';

//@Component({
//  selector: 'app-root',
//  imports: [RouterOutlet,HeaderComponent,FooterComponent],
//  templateUrl: './app.component.html',
//  styleUrl: './app.component.css'
//})
//export class AppComponent {
//  title = 'vezeeta';
//}


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,

})
export class AppComponent {

    title = 'vezeeta';
}
