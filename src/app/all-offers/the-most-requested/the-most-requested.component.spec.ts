import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMostRequestedComponent } from './the-most-requested.component';

describe('TheMostRequestedComponent', () => {
  let component: TheMostRequestedComponent;
  let fixture: ComponentFixture<TheMostRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMostRequestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMostRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
