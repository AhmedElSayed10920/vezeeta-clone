import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOffersComponent } from './navbar-offers.component';

describe('NavbarOffersComponent', () => {
  let component: NavbarOffersComponent;
  let fixture: ComponentFixture<NavbarOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
