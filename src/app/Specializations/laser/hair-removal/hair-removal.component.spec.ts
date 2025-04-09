import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairRemovalComponent } from './hair-removal.component';

describe('HairRemovalComponent', () => {
  let component: HairRemovalComponent;
  let fixture: ComponentFixture<HairRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairRemovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
