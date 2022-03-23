import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCapturePapeleriaCCMComponent } from './repse-capture-papeleria-ccm.component';

describe('RepseCapturePapeleriaCCMComponent', () => {
  let component: RepseCapturePapeleriaCCMComponent;
  let fixture: ComponentFixture<RepseCapturePapeleriaCCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCapturePapeleriaCCMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCapturePapeleriaCCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
