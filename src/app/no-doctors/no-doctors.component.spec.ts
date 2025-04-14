import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDoctorsComponent } from './no-doctors.component';

describe('NoDoctorsComponent', () => {
  let component: NoDoctorsComponent;
  let fixture: ComponentFixture<NoDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
