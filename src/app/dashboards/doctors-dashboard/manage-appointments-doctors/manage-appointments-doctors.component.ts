import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { DoctorWorkingHoursService, DoctorWorkingHour } from '../../../services/doctor-working-hours-service.service';
import Swal from 'sweetalert2';

interface DayEntry {
  date: Date;
  startTime?: string;
  endTime?: string;
}

@Component({
  selector: 'app-manage-appointments-doctors',
  standalone: true,
  templateUrl: './manage-appointments-doctors.component.html',
  styleUrls: ['./manage-appointments-doctors.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class ManageAppointmentsDoctorsComponent implements OnInit {
  upcomingDays: DayEntry[] = [];
  workingHours: DoctorWorkingHour[] = [];

  constructor(
    private workingHoursService: DoctorWorkingHoursService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.generateUpcomingDays(7);
    this.loadWorkingHours(); 
  }

  generateUpcomingDays(count: number) {
    const today = new Date();
    this.upcomingDays = [];

    for (let i = 1; i <= count; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      this.upcomingDays.push({ date: nextDay });
    }
  }

  loadWorkingHours() {
    this.workingHoursService.getByDoctor().subscribe(data => {
      this.workingHours = data;
    });
  }
  
  saveDay(day: DayEntry) {
    if (!day.startTime || !day.endTime) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Time',
        text: 'Please specify both start and end times.',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    if (day.endTime <= day.startTime) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Time Range',
        text: 'End time must be after start time.',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    const workingHour: DoctorWorkingHour = {
      dayOfWeek:new Date(day.date),  // إرسال التاريخ كاملاً بتنسيق ISO
      startTime: day.startTime,
      endTime: day.endTime
    };
  
    this.workingHoursService.add(workingHour).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Saved',
        text: 'Working hour saved successfully.',
        confirmButtonText: 'OK'
      });
      this.loadWorkingHours();
    });
  }
  
  

  saveUpdatedHour(hour: DoctorWorkingHour) {
    if (hour.endTime <= hour.startTime) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Time Range',
        text: 'End time must be after start time.',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.workingHoursService.update(hour.id!, hour).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'Working hour updated successfully.',
        confirmButtonText: 'OK'
      });
      this.loadWorkingHours();
    });
  }

  deleteHour(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this working hour?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        this.workingHoursService.delete(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted',
            text: 'Working hour deleted successfully.',
            confirmButtonText: 'OK'
          });
          this.workingHours = this.workingHours.filter(hour => hour.id !== id);
        });
      }
    });
  }
  
}
