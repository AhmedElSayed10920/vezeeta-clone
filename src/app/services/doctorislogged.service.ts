import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DoctorisloggedService {

  private doctorLoggedIn = new BehaviorSubject<boolean>(this.hasDoctorToken());
  doctorLoggedIn$ = this.doctorLoggedIn.asObservable();

  private isAdminLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn$ = this.isAdminLoggedInSubject.asObservable();
  constructor() { }

  private hasDoctorToken(): boolean {
    return !!localStorage.getItem('doctorToken');
  }

  setDoctorLoggedIn(loggedIn: boolean) {
    this.doctorLoggedIn.next(loggedIn);
  }

  loginAsAdmin() {
    localStorage.setItem('isAdminLoggedIn', 'true');
    this.isAdminLoggedInSubject.next(true);
  }

  checkAdminLogin() {
    const loggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    this.isAdminLoggedInSubject.next(loggedIn);
  }
}
