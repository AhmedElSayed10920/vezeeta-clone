import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: string | null = null;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.getUsernameObservable().subscribe((name) => {
      this.username = name;
    });
  }

  logout() {
    this.tokenService.clearUsername();
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
