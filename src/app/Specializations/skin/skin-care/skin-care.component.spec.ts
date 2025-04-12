import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareComponent } from './skin-care.component';

describe('SkinCareComponent', () => {
  let component: SkinCareComponent;
  let fixture: ComponentFixture<SkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
