import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSpecialtiesComponent } from './book-specialties.component';

describe('BookSpecialtiesComponent', () => {
  let component: BookSpecialtiesComponent;
  let fixture: ComponentFixture<BookSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSpecialtiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
