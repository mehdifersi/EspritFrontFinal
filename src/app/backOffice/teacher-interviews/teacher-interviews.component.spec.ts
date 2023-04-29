import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInterviewsComponent } from './teacher-interviews.component';

describe('TeacherInterviewsComponent', () => {
  let component: TeacherInterviewsComponent;
  let fixture: ComponentFixture<TeacherInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherInterviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
