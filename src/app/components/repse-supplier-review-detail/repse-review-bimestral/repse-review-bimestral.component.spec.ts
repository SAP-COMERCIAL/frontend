import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewBimestralComponent } from './repse-review-bimestral.component';

describe('RepseReviewBimestralComponent', () => {
  let component: RepseReviewBimestralComponent;
  let fixture: ComponentFixture<RepseReviewBimestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewBimestralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewBimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
