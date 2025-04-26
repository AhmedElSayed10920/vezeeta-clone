import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
  @Input() bookingInfo!: any;
  selectedDate: string = '';
  patientId: number | null = null;
  isLoggedIn: boolean = false;

  captchaToken: string | null = null;
  showCaptcha: boolean = false;

  bookingData = {
    name: '',
    phone: '',
    email: ''
  };

  clinics = [
    { id: 1000, name: "Future Care Clinic", phone: "01002223344" },
    { id: 1001, name: "Al-Hayat Medical Center", phone: "01005556677" },
    { id: 1002, name: "Al-Salam Specialized Clinic", phone: "01001234567" },
    { id: 1003, name: "Al-Shifa Medical Center", phone: "01009876543" },
    { id: 1004, name: "Al-Noor Clinic", phone: "01004567890" },
    { id: 1005, name: "Al-Amal Health Center", phone: "01007778899" },
    { id: 1006, name: "Dar Al-Fouad Clinic", phone: "01001112233" },
    { id: 1007, name: "Cairo Health Center", phone: "01001112233" },
    { id: 1008, name: "Giza Family Clinic", phone: "01002223344" },
    { id: 1009, name: "Alexandria Medical Hub", phone: "01003334455" },
    { id: 1010, name: "Mansoura Specialist Clinic", phone: "01004445566" },
    { id: 1011, name: "Luxor General Clinic", phone: "01005556677" },
    { id: 1012, name: "Aswan Care Clinic", phone: "01006667788" },
    { id: 1013, name: "Sharm El-Sheikh Wellness", phone: "01007778899" },
    { id: 1014, name: "Hurghada Medical Center", phone: "01008889900" },
    { id: 1015, name: "Ismailia Health Point", phone: "01009990011" },
    { id: 1016, name: "Suez Smart Clinic", phone: "01001010122" },
    { id: 1017, name: "Tanta Advanced Care", phone: "01002020233" },
    { id: 1018, name: "Minya City Clinic", phone: "01003030344" },
    { id: 1019, name: "Fayoum Doctors Plaza", phone: "01004040455" },
    { id: 1020, name: "Beni Suef Medical Tower", phone: "01005050566" },
    { id: 1021, name: "Qena Family Health", phone: "01006060677" },
    { id: 1022, name: "Sohag Modern Clinic", phone: "01007070788" },
    { id: 1023, name: "Zagazig Healthcare", phone: "01008080899" },
    { id: 1024, name: "New Cairo Specialist", phone: "01009090900" },
    { id: 1025, name: "6th October Clinic", phone: "01001011112" },
    { id: 1026, name: "Obour City Health", phone: "01002022223" },
    { id: 1027, name: "Heliopolis Care", phone: "01003033334" },
    { id: 1028, name: "Nasr City Medical Center", phone: "01004044445" },
    { id: 1029, name: "Sheikh Zayed Wellness", phone: "01005055556" },
    { id: 1030, name: "Maadi Specialized Clinic", phone: "01006066667" },
    { id: 1031, name: "Madinaty Health Complex", phone: "01007077778" },
    { id: 1032, name: "Rehab Medical Center", phone: "01008088889" },
    { id: 1033, name: "Shubra Healthcare", phone: "01009099990" },
    { id: 1034, name: "Ain Shams Family Clinic", phone: "01001000001" },
    { id: 1035, name: "Downtown Doctors Hub", phone: "01002010102" },
    { id: 1036, name: "New Capital Medical", phone: "01003020203" },
    { id: 1037, name: "Smart Village Health", phone: "01004030304" },
    { id: 1038, name: "Garden City Medical", phone: "01005040405" },
    { id: 1039, name: "Nasr City Family Care", phone: "01006050506" },
    { id: 1040, name: "Zamalek Doctors Plaza", phone: "01007060607" }
  ];

  constructor(
    private appointmentService: AppointmentService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (token && userJson) {
      const user = JSON.parse(userJson);
      this.isLoggedIn = true;
      this.patientId = user.id;
      this.bookingData.name = user.name;
      this.bookingData.phone = user.phone;
      this.bookingData.email = user.email;
    }

    this.selectedDate = this.bookingInfo?.day || '';

    // Callback functions from reCAPTCHA
    (window as any).onCaptchaSuccess = (token: string) => {
      this.captchaToken = token;
      this.submitBooking(); // ✅ لما الكابتشا تنجح
    };

    (window as any).onCaptchaExpired = () => {
      this.captchaToken = null;
      console.warn("CAPTCHA expired");
    };
  }

  bookAppointment() {
    if (!this.bookingData.name || !this.bookingData.phone) {
      alert("برجاء إدخال الاسم ورقم الهاتف");
      return;
    }

    // لو الكابتشا لسه مش ظاهرة
    if (!this.showCaptcha) {
      this.showCaptcha = true;

      setTimeout(() => {
        const grecaptcha = (window as unknown as { grecaptcha: any }).grecaptcha;
        if (grecaptcha) {
          grecaptcha.render(document.querySelector('.g-recaptcha'), {
            sitekey: '6Ld7XBorAAAAANMQY-FKhCQ1xGhD-QsJuPmFczMD',
            callback: 'onCaptchaSuccess',
            'expired-callback': 'onCaptchaExpired'
          });
        }
      });

      return;
    }

    // لو ظاهرة بس المستخدم لسه مكمّلهاش
    if (!this.captchaToken) {
      alert("برجاء إتمام التحقق من أنك لست روبوتًا.");
      return;
    }

    // لو كله تمام، نكمل الحجز
    this.submitBooking();
  }

  submitBooking() {
    if (this.isLoggedIn && this.patientId) {
      this.sendBooking(this.patientId);
    } else {
      const newPatient = {
        name: this.bookingData.name,
        email: this.bookingData.email,
        phone: this.bookingData.phone,
        gender: "m",
        birthDate: "2000-01-01",
        location: "cairo",
        password: "@As1234"
      };

      this.appointmentService.createPatient(newPatient).subscribe({
        next: (res: any) => {
          this.sendBooking(res.id);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  sendBooking(pid: number) {
    const clinicName = this.bookingInfo?.doctor?.clinicName || '';
    const matchedClinic = this.clinics.find(c => c.name === clinicName);

    if (!matchedClinic) {
      alert("❌ لم يتم العثور على العيادة المحددة!");
      return;
    }

    const payload = {
      adate: this.formatDate(this.selectedDate),
      atime: "14:00:00",
      pid: pid,
      cid: matchedClinic.id,
      did: this.bookingInfo?.doctor?.id,
      captchaToken: this.captchaToken!,
    };

    this.appointmentService.bookAppointment(payload).subscribe({
      next: (res) => {
        const confirmationData = {
          booking: {
            date: payload.adate,
            time: payload.atime,
            clinicId: payload.cid,
            clinicNumber: matchedClinic.phone,
          },
          doctor: this.bookingInfo?.doctor,
          patient: {
            name: this.bookingData.name,
            phone: this.bookingData.phone,
            email: this.bookingData.email
          }
        };
        this.router.navigate(['/SuccessReservation'], {
          state: confirmationData
        });
      },
      error: (err) => {
        alert("Failed to Book ❌");
        console.error(err);
      }
    });
  }

  formatDate(inputDate: string): string {
    const parts = inputDate.split('/');
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    return `2025-${month}-${day}`;
  }

  onCancel() {
    this.location.back();
  }
}
