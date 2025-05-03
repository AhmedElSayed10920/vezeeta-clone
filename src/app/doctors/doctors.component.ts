import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';
import { RouterModule } from '@angular/router';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule, RouterModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  doctors = signal<Doctor[]>([]);
  filteredDoctors = signal<Doctor[]>([]);
  specialties = signal<string[]>([]);
  selectedSpecialty = signal<string>('All Specialties');

  paginationDots = computed(() =>
    this.filteredDoctors().map((_, index) => ({
      active: index === 0
    }))
  );

  constructor(private doctorsService: DoctorService, public imageService: ImageService) {
    this.fetchDoctors();
    this.fetchSpecialties();
  }

  fetchDoctors() {
    this.doctorsService.getDoctors().subscribe(data => {
      this.doctors.set(data);
      this.filteredDoctors.set(data);
    });
  }

  fetchSpecialties() {
    this.doctorsService.getDoctors().subscribe(data => {
      const uniqueSpecialties = Array.from(new Set(data.map(doc => doc.mainSpecialty).filter((s): s is string => s !== undefined)));
      this.specialties.set(['All Specialties', ...uniqueSpecialties]);
    });
  }

  filterDoctors(specialty: string) {
    this.selectedSpecialty.set(specialty);
    this.filteredDoctors.set(
      specialty === 'All Specialties'
        ? this.doctors()
        : this.doctors().filter(doc => doc.mainSpecialty === specialty)
    );
  }

  getDoctorImage(doctorId: number, doctor: Doctor): string {
    if (doctor.image?.includes('ma7moudsayed-001-site1')) {
      return this.imageService.getImagePath(doctorId.toString());
    } else {
      return doctor.image!;
    }
  }
}
