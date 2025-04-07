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

  
  private staticAvailability = {
    Sat: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'],
    Sun: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],
    Mon: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'],
    Tue: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],
    Wed: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'],
    Thu: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],
    Fri: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM']
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
}
