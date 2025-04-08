import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessReservationComponent } from './success-reservation.component';

describe('SuccessReservationComponent', () => {
  let component: SuccessReservationComponent;
  let fixture: ComponentFixture<SuccessReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
