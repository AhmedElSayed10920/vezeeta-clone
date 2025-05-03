import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsListDoctorsComponent } from './appointments-list-doctors.component';

describe('AppointmentsListDoctorsComponent', () => {
  let component: AppointmentsListDoctorsComponent;
  let fixture: ComponentFixture<AppointmentsListDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsListDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsListDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
