import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class NewDoctorServiceService {

  private baseUrl = 'https://localhost:7167/api/NewDoctors'; 

  constructor(private http: HttpClient) { }

  getDoctorProfile(): Observable<any> {
    const token = localStorage.getItem('doctorToken'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}/profile`, { headers });
  }

  updateDoctor(id: number, formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('doctorToken') || ''}`
    });

    return this.http.put(`${this.baseUrl}/update/${id}`, formData, { headers });
  }

  addOffer(offer: Offer): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-offer`, offer);
  }

  getFeedbackByDoctorId(doctorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/feedback/${doctorId}`);
  }
  
}

