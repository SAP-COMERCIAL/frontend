import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewGeneralComponent } from './repse-review-general.component';

describe('RepseReviewGeneralComponent', () => {
  let component: RepseReviewGeneralComponent;
  let fixture: ComponentFixture<RepseReviewGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
