import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailFilesComponent } from './quotation-detail-files.component';

describe('QuotationDetailFilesComponent', () => {
  let component: QuotationDetailFilesComponent;
  let fixture: ComponentFixture<QuotationDetailFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
