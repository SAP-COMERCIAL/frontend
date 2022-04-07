import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepseCommentsComponent } from './repse-comments.component';

describe('RepseCommentsComponent', () => {
  let component: RepseCommentsComponent;
  let fixture: ComponentFixture<RepseCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepseCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepseCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
