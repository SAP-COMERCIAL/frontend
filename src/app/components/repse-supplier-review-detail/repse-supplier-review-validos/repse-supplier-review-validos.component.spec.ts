import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseSupplierReviewValidosComponent } from './repse-supplier-review-validos.component';

describe('RepseSupplierReviewValidosComponent', () => {
  let component: RepseSupplierReviewValidosComponent;
  let fixture: ComponentFixture<RepseSupplierReviewValidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseSupplierReviewValidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseSupplierReviewValidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
