import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDetailsStudentComponent } from './interview-details-student.component';

describe('InterviewDetailsStudentComponent', () => {
  let component: InterviewDetailsStudentComponent;
  let fixture: ComponentFixture<InterviewDetailsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewDetailsStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewDetailsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
