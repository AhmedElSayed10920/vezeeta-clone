import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-doctors',
  imports: [],
  templateUrl: './no-doctors.component.html',
  styleUrl: './no-doctors.component.css'
})
export class NoDoctorsComponent {
   router = inject(Router);
goHome() { 
  this.router.navigate(['/home']);
}
}
