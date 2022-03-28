import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUserComponent } from './supplier-user.component';

describe('SupplierUserComponent', () => {
  let component: SupplierUserComponent;
  let fixture: ComponentFixture<SupplierUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
