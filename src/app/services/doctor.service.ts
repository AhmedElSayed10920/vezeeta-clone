import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../models/doctor'; 
import { HttpClient } from '@angular/common/http';
import { Offer } from '../offer';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {


  private apiUrl = 'https://localhost:7167/api/Doctor/Doctors';
  private doctorByIdUrl = 'https://localhost:7167/api/Doctor';
  private apiOffersUrl = 'https://localhost:7167/api/Offers';




  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl).pipe(
      map((doctors: Doctor[]) => {
        return doctors.map((doctor) => ({
          ...doctor
        }));
      })
    );
  }


  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorByIdUrl}/${id}`).pipe(
      map((doctor: Doctor) => {
        return {
          ...doctor
        };
      })
    );
  }

  getSpecialties(): Observable<string[]> {
    return this.getDoctors().pipe(
      map((doctors: Doctor[]) => {
        const specialties = doctors
          .map((doc) => doc.mainSpecialty)
          .filter((s): s is string => s !== undefined);
        const uniqueSpecialties = Array.from(new Set(specialties));
        return ['All Specialties', ...uniqueSpecialties];
      })
    );
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiOffersUrl);
  }

  deleteDoctor(doctorId: number): Observable<any> {
    return this.http.delete(`${this.doctorByIdUrl}/${doctorId}`);
  }

}


