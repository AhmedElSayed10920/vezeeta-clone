import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinWhiteningComponent } from './skin-whitening.component';

describe('SkinWhiteningComponent', () => {
  let component: SkinWhiteningComponent;
  let fixture: ComponentFixture<SkinWhiteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinWhiteningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinWhiteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
