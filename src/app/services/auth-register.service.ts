// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthRegisterService {
//   private apiUrl = 'https://localhost:7167/api/Patient/register';

//   constructor(private http: HttpClient) {}

//   register(user: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(this.apiUrl, user, { headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRegisterService {
  private apiUrl = 'https://localhost:7167/api/Patient/register';
  private checkEmailUrl = 'https://localhost:7167/api/Patient/verify-otp';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, user, { headers });
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.checkEmailUrl}?email=${email}`);
  }
}
