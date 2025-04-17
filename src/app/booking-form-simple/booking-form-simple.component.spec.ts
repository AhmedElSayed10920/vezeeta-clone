import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormSimpleComponent } from './booking-form-simple.component';

describe('BookingFormSimpleComponent', () => {
  let component: BookingFormSimpleComponent;
  let fixture: ComponentFixture<BookingFormSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFormSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
