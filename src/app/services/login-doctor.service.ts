import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginDoctorService {
  private apiUrl = 'https://localhost:7167/api/NewDoctors/login';

  constructor(private http: HttpClient) {}

  loginDoctor(loginData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
