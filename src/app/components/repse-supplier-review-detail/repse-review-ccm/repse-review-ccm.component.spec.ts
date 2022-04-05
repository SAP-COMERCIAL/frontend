import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewCcmComponent } from './repse-review-ccm.component';

describe('RepseReviewCcmComponent', () => {
  let component: RepseReviewCcmComponent;
  let fixture: ComponentFixture<RepseReviewCcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewCcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewCcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
