import { Component, OnInit } from '@angular/core';
import { TokenUpdateService } from '../services/token-update.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class MyProfileComponent implements OnInit {
  name = '';
  email = '';
  mobile = '';
  birthDate: string = '';
  maxDate: string = '';

  constructor(
    private tokenUpdateService: TokenUpdateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadUserDataFromToken();
    this.setMaxDateToToday();
  }

  loadUserDataFromToken(): void {
    const user = this.tokenUpdateService.getUserData();
    if (user) {
      this.name = user.pname || '';
      this.email = user.sub || '';
      this.mobile = user.pphone || '';
      this.birthDate = user.pbirthDate || '';
    }
  }

  setMaxDateToToday(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.maxDate = `${year}-${month}-${day}`;
  }

  isDateInvalid(): boolean {
    if (!this.birthDate) return false;

    const selectedDate = new Date(this.birthDate);
    const now = new Date();

    // ضبط الوقت للمقارنة الدقيقة
    selectedDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    return selectedDate > now;
  }

  saveProfile(): void {
    if (this.isDateInvalid()) {
      alert('Please select a valid birth date.');
      return;
    }

    const updatedData = {
      name: this.name,
      email: this.email,
      phone: this.mobile,
      birthDate: this.birthDate,
    };

    this.http
      .put('https://localhost:7167/api/Patient/update', updatedData, {
        headers: {
          Authorization: `Bearer ${this.tokenUpdateService.getToken()}`,
        },
      })
      .subscribe({
        next: (response) => {
          alert('Profile updated successfully!');
          const userData = {
            sub: this.email,
            pname: this.name,
            pphone: this.mobile,
            pbirthDate: this.birthDate,
          };
          const newToken = this.createNewToken(userData);
          localStorage.setItem('token', newToken);
          this.tokenUpdateService.setUsername(this.name);
          this.loadUserDataFromToken();
        },
        error: (error) => {
          console.error('Error updating profile', error);
          alert('Error updating profile');
        },
      });
  }

  cancelEdit(): void {
    this.loadUserDataFromToken();
  }

  createNewToken(userData: any): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const payload = {
      sub: userData.sub,
      pname: userData.pname,
      pphone: userData.pphone,
      pbirthDate: userData.pbirthDate,
    };

    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));
    const signature = btoa('dummySignature');

    return `${base64Header}.${base64Payload}.${signature}`;
  }
}
