import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownsBridgesComponent } from './crowns-bridges.component';

describe('CrownsBridgesComponent', () => {
  let component: CrownsBridgesComponent;
  let fixture: ComponentFixture<CrownsBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrownsBridgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrownsBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
