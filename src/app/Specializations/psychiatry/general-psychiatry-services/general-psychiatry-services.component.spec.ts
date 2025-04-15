import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPsychiatryServicesComponent } from './general-psychiatry-services.component';

describe('GeneralPsychiatryServicesComponent', () => {
  let component: GeneralPsychiatryServicesComponent;
  let fixture: ComponentFixture<GeneralPsychiatryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralPsychiatryServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPsychiatryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
