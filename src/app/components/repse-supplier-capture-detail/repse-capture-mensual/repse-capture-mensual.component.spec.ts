import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCaptureMensualComponent } from './repse-capture-mensual.component';

describe('RepseCaptureMensualComponent', () => {
  let component: RepseCaptureMensualComponent;
  let fixture: ComponentFixture<RepseCaptureMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCaptureMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCaptureMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
