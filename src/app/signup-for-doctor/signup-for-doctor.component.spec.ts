import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForDoctorComponent } from './signup-for-doctor.component';

describe('SignupForDoctorComponent', () => {
  let component: SignupForDoctorComponent;
  let fixture: ComponentFixture<SignupForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
