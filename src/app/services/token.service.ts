import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private usernameSubject = new BehaviorSubject<string | null>(
    this.getUsername()
  );

  constructor() {}

  setUsername(username: string) {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  clearUsername() {
    localStorage.removeItem('username');
    this.usernameSubject.next(null);
  }

  getUsernameObservable() {
    return this.usernameSubject.asObservable();
  }
}
