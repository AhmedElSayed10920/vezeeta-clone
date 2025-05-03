import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorVerificationService {
  private apiUrl = 'https://localhost:7167/api/NewDoctors';

  constructor(private http: HttpClient) { }

  // Get unverified doctors
  getUnverifiedDoctors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/unverified-doctors`);
  }

  // Approve doctor by changing verification to true
  approveDoctor(doctorId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/approve-doctor/${doctorId}`, {});
  }
}
