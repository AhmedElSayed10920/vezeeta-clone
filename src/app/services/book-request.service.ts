import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookRequestService {
  private baseUrlBySpeciality = 'https://localhost:7167/api/Doctor/search';
  private baseUrlByName = 'https://localhost:7167/api/Doctor';
  constructor(private http: HttpClient) {}
  getBookingData(
    speciality: string = '',
    city: string = '',
    governorate: string = '',
  ): Observable<any> {
    let params = new HttpParams();

    if (speciality) params = params.set('speciality', speciality);
    if (city) params = params.set('city', city);
    if (governorate) params = params.set('governorate', governorate);

    return this.http.get(this.baseUrlBySpeciality, { params });
  }

  searchByName(name: string) {
    let params = new HttpParams().set('name', name);

    return this.http.get<any[]>(this.baseUrlByName, { params });
  }
}
