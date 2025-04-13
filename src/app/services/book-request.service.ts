import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookRequestService {
  private baseUrl = 'https://localhost:7167/api/Doctor/Doctors';

  constructor(private http: HttpClient) {}

  getBookingData(
    specialty: string = '',
    city: string = '',
    governorate: string = '',
    name: string = ''
  ): Observable<any> {
    let params = new HttpParams();

    if (specialty) params = params.set('specialty', specialty);
    if (city) params = params.set('city', city);
    if (governorate) params = params.set('governorate', governorate);
    if (name) params = params.set('name', name);

    return this.http.get(this.baseUrl, { params });
  }
}
