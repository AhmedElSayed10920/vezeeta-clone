import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferNotFoundComponent } from './offer-not-found.component';

describe('OfferNotFoundComponent', () => {
  let component: OfferNotFoundComponent;
  let fixture: ComponentFixture<OfferNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
