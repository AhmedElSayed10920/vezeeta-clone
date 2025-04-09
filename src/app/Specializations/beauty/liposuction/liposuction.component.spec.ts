import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiposuctionComponent } from './liposuction.component';

describe('LiposuctionComponent', () => {
  let component: LiposuctionComponent;
  let fixture: ComponentFixture<LiposuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiposuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiposuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
