import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterDoctorService {
  private apiUrl = 'https://localhost:7167/api/Doctor/register';

  constructor(private http: HttpClient) {}

  registerDoctor(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers });
  }
}
