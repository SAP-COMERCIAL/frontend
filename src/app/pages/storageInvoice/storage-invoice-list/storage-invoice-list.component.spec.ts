import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageInvoiceListComponent } from './storage-invoice-list.component';

describe('StorageInvoiceListComponent', () => {
  let component: StorageInvoiceListComponent;
  let fixture: ComponentFixture<StorageInvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageInvoiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
