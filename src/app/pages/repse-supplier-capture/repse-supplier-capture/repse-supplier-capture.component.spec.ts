import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseSupplierCaptureComponent } from './repse-supplier-capture.component';

describe('RepseSupplierCaptureComponent', () => {
  let component: RepseSupplierCaptureComponent;
  let fixture: ComponentFixture<RepseSupplierCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseSupplierCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseSupplierCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
