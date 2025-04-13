import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../doctor';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../offer';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:5267/api/Doctor/Doctors';
  private doctorByIdUrl = 'http://localhost:5267/api/Doctor';
  private apiOffersUrl = 'http://localhost:5267/api/Offers';



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

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiOffersUrl);
  }
  // getOfferById(id: number): Observable<Offer> {
  //   return this.http.get<Offer>(`${this.offerByIdUrl}/${id}`);
  // }

  
}


