export interface Doctor {
  id: number;
  doctorName: string;
  gender: 'M' | 'F';
  degree: string;
  fees: number;
  image: string;
  mainSpecialty: string;
  subSpecialty: string;
  clinicName: string;
  city: string;
  governorate: string;
  street: string;
}


