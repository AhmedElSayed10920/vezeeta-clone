// // // // import { Injectable } from '@angular/core';

// // // // @Injectable({
// // // //   providedIn: 'root'
// // // // })
// // // // export class AuthRegisterService {

// // // //   constructor() { }
// // // // }
// // // import { Injectable } from '@angular/core';
// // // import { HttpClient } from '@angular/common/http';
// // // import { Observable } from 'rxjs';

// // // @Injectable({
// // //   providedIn: 'root',
// // // })
// // // export class AuthRegisterService {
// // //   private apiUrl = 'https://localhost:7167/api/Patient/register'; // رابط API الخاص بالتسجيل

// // //   constructor(private http: HttpClient) {}

// // //   register(user: any): Observable<any> {
// // //     return this.http.post(this.apiUrl, user);
// // //   }
// // // }
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class AuthRegisterService {
// //   private apiUrl = 'https://localhost:7167/api/Patient/register';

// //   constructor(private http: HttpClient) {}

// //   register(user: any): Observable<any> {
// //     return this.http.post(this.apiUrl, user);
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthRegisterService {
//   private apiUrl = 'https://localhost:7167/api/Patient/register'; // تأكد من صحة الرابط

//   constructor(private http: HttpClient) {}

//   register(user: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(this.apiUrl, user, { headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRegisterService {
  private apiUrl = 'https://localhost:7167/api/Patient/register'; // تأكد من صحة الرابط

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, user, { headers });
  }
}
