import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInterviewComponent } from './student-interview.component';

describe('StudentInterviewComponent', () => {
  let component: StudentInterviewComponent;
  let fixture: ComponentFixture<StudentInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
