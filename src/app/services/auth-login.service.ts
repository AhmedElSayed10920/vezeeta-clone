import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class AuthLoginService {
  private apiUrl = 'http://localhost:5267/api/Patient/login';

  constructor(private http: HttpClient) { }

  onlogin(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user); 
  }
}
