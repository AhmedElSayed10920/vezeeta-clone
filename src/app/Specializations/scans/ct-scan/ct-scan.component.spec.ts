import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtScanComponent } from './ct-scan.component';

describe('CtScanComponent', () => {
  let component: CtScanComponent;
  let fixture: ComponentFixture<CtScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
