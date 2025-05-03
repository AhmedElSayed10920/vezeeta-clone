import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TokenService } from '../services/token.service';
import { DoctorisloggedService } from '../services/doctorislogged.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: string | null = null;
  isDoctorLoggedIn = false;
  isAdminLoggedIn = false;
  constructor(private router: Router, private tokenService: TokenService, private doctorisloggedService: DoctorisloggedService) {}

  ngOnInit(): void {
    this.tokenService.getUsernameObservable().subscribe((name) => {
      this.username = name;
    });
    this.doctorisloggedService.doctorLoggedIn$.subscribe((status) => {
      this.isDoctorLoggedIn = status;
    });
    this.doctorisloggedService.isAdminLoggedIn$.subscribe((status) => {
      this.isAdminLoggedIn = status;
    });

  }

  logout() {
    localStorage.clear(); 
    this.tokenService.clearUsername();
    this.isDoctorLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.router.navigate(['/home']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
