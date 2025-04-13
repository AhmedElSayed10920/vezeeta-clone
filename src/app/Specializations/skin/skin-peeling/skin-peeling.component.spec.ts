import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinPeelingComponent } from './skin-peeling.component';

describe('SkinPeelingComponent', () => {
  let component: SkinPeelingComponent;
  let fixture: ComponentFixture<SkinPeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinPeelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinPeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
