import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCaptureCuatrimestralComponent } from './repse-capture-cuatrimestral.component';

describe('RepseCaptureCuatrimestralComponent', () => {
  let component: RepseCaptureCuatrimestralComponent;
  let fixture: ComponentFixture<RepseCaptureCuatrimestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCaptureCuatrimestralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCaptureCuatrimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
