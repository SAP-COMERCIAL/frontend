import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyProfileComponent } from './supply-profile.component';

describe('SupplyProfileComponent', () => {
  let component: SupplyProfileComponent;
  let fixture: ComponentFixture<SupplyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
