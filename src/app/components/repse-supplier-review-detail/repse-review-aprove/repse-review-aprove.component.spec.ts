import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewAproveComponent } from './repse-review-aprove.component';

describe('RepseReviewAproveComponent', () => {
  let component: RepseReviewAproveComponent;
  let fixture: ComponentFixture<RepseReviewAproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewAproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewAproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
