import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterDoctorService {
  private apiUrl = 'https://localhost:7167/api/NewDoctors/register';

  constructor(private http: HttpClient) { }

  registerDoctor(doctorData: FormData): Observable<any> {


    return this.http.post(this.apiUrl, doctorData);

  }
}
