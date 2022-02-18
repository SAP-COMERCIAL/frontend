import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewCuatrimestralComponent } from './repse-review-cuatrimestral.component';

describe('RepseReviewCuatrimestralComponent', () => {
  let component: RepseReviewCuatrimestralComponent;
  let fixture: ComponentFixture<RepseReviewCuatrimestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewCuatrimestralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewCuatrimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
