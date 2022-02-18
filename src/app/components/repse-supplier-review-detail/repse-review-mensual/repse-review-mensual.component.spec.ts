import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReviewMensualComponent } from './repse-review-mensual.component';

describe('RepseReviewMensualComponent', () => {
  let component: RepseReviewMensualComponent;
  let fixture: ComponentFixture<RepseReviewMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReviewMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReviewMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
