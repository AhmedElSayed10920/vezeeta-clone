import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorisloggedService } from '../services/doctorislogged.service';

@Component({
  selector: 'app-adminlogin',
  imports: [CommonModule,
    FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router,private doctorisloggedService: DoctorisloggedService) { }

  onLogin() {
    const fixedUsername = 'admin';
    const fixedPassword = '@Ahmed3000910';

    if (this.username === fixedUsername && this.password === fixedPassword) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      this.doctorisloggedService.loginAsAdmin();
      this.router.navigate(['/adminDashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
