import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenUpdateService {
  private usernameSubject = new BehaviorSubject<string | null>(
    this.getUsername()
  );
  username$ = this.usernameSubject.asObservable();

  getUserData(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = atob(token.split('.')[1]);
      return JSON.parse(payload);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  setUsername(name: string): void {
    localStorage.setItem('username', name);
    this.usernameSubject.next(name);
  }

  clearUsername(): void {
    localStorage.removeItem('username');
    this.usernameSubject.next(null);
  }
}
