import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCaptureComponent } from './project-capture.component';

describe('ProjectCaptureComponent', () => {
  let component: ProjectCaptureComponent;
  let fixture: ComponentFixture<ProjectCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
