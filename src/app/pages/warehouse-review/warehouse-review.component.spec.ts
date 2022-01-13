import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseReviewComponent } from './warehouse-review.component';

describe('WarehouseReviewComponent', () => {
  let component: WarehouseReviewComponent;
  let fixture: ComponentFixture<WarehouseReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
