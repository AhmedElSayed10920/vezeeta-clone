import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRegisterService {
  private apiUrl = 'https://localhost:7167/api/Patient/register'; // تأكد من صحة الرابط

  constructor(private http: HttpClient) {}

  register(user: any, captchaToken: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      ...user,
      captchaToken
    };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
