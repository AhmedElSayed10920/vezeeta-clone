import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdoctorsVerificationComponent } from './newdoctors-verification.component';

describe('NewdoctorsVerificationComponent', () => {
  let component: NewdoctorsVerificationComponent;
  let fixture: ComponentFixture<NewdoctorsVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewdoctorsVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdoctorsVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
