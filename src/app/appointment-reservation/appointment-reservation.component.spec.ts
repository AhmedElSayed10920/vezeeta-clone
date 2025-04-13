import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentReservationComponent } from './appointment-reservation.component';

describe('AppointmentReservationComponent', () => {
  let component: AppointmentReservationComponent;
  let fixture: ComponentFixture<AppointmentReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
