import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../doctor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:5267/api/Doctor/Doctors';
  private doctorByIdUrl = 'http://localhost:5267/api/Doctor';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorByIdUrl}/${id}`);
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

//////////////////// offer service /////////////

  // getOffers(): Observable<Offer[]> {
  //   return this.http.get<Offer[]>(this.offersUrl);
  // }

  // getOfferById(id: number): Observable<Offer> {
  //   return this.http.get<Offer>(`${this.offerByIdUrl}/${id}`);
  // }
}
