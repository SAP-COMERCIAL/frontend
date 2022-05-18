import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseReportComponent } from './repse-report.component';

describe('RepseReportComponent', () => {
  let component: RepseReportComponent;
  let fixture: ComponentFixture<RepseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
