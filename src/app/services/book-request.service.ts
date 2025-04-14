import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface DoctorFilters {
  speciality?: string;
  city?: string;
  governorate?: string;
  subSpecialty?: string;
  gender?: string;
  maxFees?: number;
  insurance?: string;
  // Add more filter parameters as needed
}

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

  getFilteredDoctors(params: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrlBySpeciality, { params });
  }

  getDoctorsWithFilters(filters: DoctorFilters): Observable<any[]> {
    let params = new HttpParams();

    // Add all provided filters to the params
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<any[]>(this.baseUrlBySpeciality, { params });
  }


}