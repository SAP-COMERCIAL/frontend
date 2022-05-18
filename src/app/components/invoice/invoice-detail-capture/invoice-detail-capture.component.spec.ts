import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailCaptureComponent } from './invoice-detail-capture.component';

describe('InvoiceDetailCaptureComponent', () => {
  let component: InvoiceDetailCaptureComponent;
  let fixture: ComponentFixture<InvoiceDetailCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
