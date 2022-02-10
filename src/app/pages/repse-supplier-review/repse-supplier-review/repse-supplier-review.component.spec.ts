import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseSupplierReviewComponent } from './repse-supplier-review.component';

describe('RepseSupplierReviewComponent', () => {
  let component: RepseSupplierReviewComponent;
  let fixture: ComponentFixture<RepseSupplierReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseSupplierReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseSupplierReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
