import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentsDoctorsComponent } from './manage-appointments-doctors.component';

describe('ManageAppointmentsDoctorsComponent', () => {
  let component: ManageAppointmentsDoctorsComponent;
  let fixture: ComponentFixture<ManageAppointmentsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppointmentsDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppointmentsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
