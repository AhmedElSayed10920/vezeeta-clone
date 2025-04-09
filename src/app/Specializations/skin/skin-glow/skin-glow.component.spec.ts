import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinGlowComponent } from './skin-glow.component';

describe('SkinGlowComponent', () => {
  let component: SkinGlowComponent;
  let fixture: ComponentFixture<SkinGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinGlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
