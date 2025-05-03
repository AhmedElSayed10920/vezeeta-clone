import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }
  doctorLogin() {
    this.router.navigate(['/loginForDoctor']);
  }
  goToContact() {
    this.router.navigate(['/contactUS']);
  }
  gotoAdminLogin() {
    this.router.navigate(['/adminLogin']);
  }
}
