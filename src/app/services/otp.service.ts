// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class OTPService {

// //   constructor() { }
// // }
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class OtpService {
//   constructor(private http: HttpClient) {}

//   verifyOtp(email: string, otp: string): Observable<any> {
//     return this.http.post('https://localhost:7167/api/Patient/verify-otp', {
//       email,
//       otp,
//     });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  constructor(private http: HttpClient) {}

  // Function to verify OTP
  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post('https://localhost:7167/api/Patient/verify-otp', {
      email,
      otp,
    });
  }
}
