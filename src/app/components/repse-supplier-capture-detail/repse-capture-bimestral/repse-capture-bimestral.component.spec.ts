import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCaptureBimestralComponent } from './repse-capture-bimestral.component';

describe('RepseCaptureBimestralComponent', () => {
  let component: RepseCaptureBimestralComponent;
  let fixture: ComponentFixture<RepseCaptureBimestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCaptureBimestralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCaptureBimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
