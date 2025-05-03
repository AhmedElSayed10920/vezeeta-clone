import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDoctorsComponent } from './reviews-doctors.component';

describe('ReviewsDoctorsComponent', () => {
  let component: ReviewsDoctorsComponent;
  let fixture: ComponentFixture<ReviewsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
