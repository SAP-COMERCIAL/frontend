import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCaptureGeneralComponent } from './repse-capture-general.component';

describe('RepseCaptureGeneralComponent', () => {
  let component: RepseCaptureGeneralComponent;
  let fixture: ComponentFixture<RepseCaptureGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCaptureGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCaptureGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
