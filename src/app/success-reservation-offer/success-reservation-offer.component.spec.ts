import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessReservationOfferComponent } from './success-reservation-offer.component';

describe('SuccessReservationOfferComponent', () => {
  let component: SuccessReservationOfferComponent;
  let fixture: ComponentFixture<SuccessReservationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessReservationOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessReservationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
