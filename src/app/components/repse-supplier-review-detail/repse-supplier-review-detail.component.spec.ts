import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseSupplierReviewDetailComponent } from './repse-supplier-review-detail.component';

describe('RepseSupplierReviewDetailComponent', () => {
  let component: RepseSupplierReviewDetailComponent;
  let fixture: ComponentFixture<RepseSupplierReviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseSupplierReviewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseSupplierReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
