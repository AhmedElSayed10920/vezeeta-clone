import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairTransplantComponent } from './hair-transplant.component';

describe('HairTransplantComponent', () => {
  let component: HairTransplantComponent;
  let fixture: ComponentFixture<HairTransplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairTransplantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
