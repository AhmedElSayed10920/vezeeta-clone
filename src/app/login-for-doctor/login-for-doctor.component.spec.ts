import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForDoctorComponent } from './login-for-doctor.component';

describe('LoginForDoctorComponent', () => {
  let component: LoginForDoctorComponent;
  let fixture: ComponentFixture<LoginForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
