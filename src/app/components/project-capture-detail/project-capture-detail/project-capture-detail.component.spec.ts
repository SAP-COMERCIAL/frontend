import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCaptureDetailComponent } from './project-capture-detail.component';

describe('ProjectCaptureDetailComponent', () => {
  let component: ProjectCaptureDetailComponent;
  let fixture: ComponentFixture<ProjectCaptureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCaptureDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCaptureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
