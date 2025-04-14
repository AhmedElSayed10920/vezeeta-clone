import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../doctor';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7167/api/Doctor/Doctors';
  private doctorByIdUrl = 'https://localhost:7167/api/Doctor';


  private staticAvailability = {
    Sat: ['10:00 AM','11:30 PM'],
    Sun: ['10:00 AM','11:30 PM'],
    Mon: ['10:00 AM','11:30 PM'],
    Tue: ['10:00 AM','11:30 PM'],
    Wed: ['10:00 AM','11:30 PM'],
    Thu: ['10:00 AM','11:30 PM'],
    Fri: ['10:00 AM','11:30 PM']
  };

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl).pipe(
      map((doctors: Doctor[]) => {
        return doctors.map(doctor => ({
          ...doctor,
          availability: this.staticAvailability
        }));
      })
    );
  }

  // جلب الأطباء باستخدام الفلاتر
  getDoctorsByFilters(
    specialty: string,
    city: string,
    governorate: string,
    // name: string
  ): Observable<Doctor[]> {
    let params = new HttpParams();

    if (specialty) params = params.set('specialty', specialty);
    if (city) params = params.set('city', city);
    if (governorate) params = params.set('governorate', governorate);
    // if (name) params = params.set('name', name);

    return this.http.get<Doctor[]>(this.apiUrl, { params }).pipe(
      map((doctors: Doctor[]) => {
        return doctors.map((doctor) => ({
          ...doctor,
          availability: this.staticAvailability,
        }));
      })
    );
  }


  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorByIdUrl}/${id}`).pipe(
      map((doctor: Doctor) => {
        return {
          ...doctor,
          availability: this.staticAvailability
        };
      })
    );
  }

  getSpecialties(): Observable<string[]> {
    return this.getDoctors().pipe(
      map((doctors: Doctor[]) => {
        const specialties = doctors.map(doc => doc.mainSpecialty).filter(s => s);
        const uniqueSpecialties = Array.from(new Set(specialties));
        return ['All Specialties', ...uniqueSpecialties];
      })
    );
  }
}
