import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarBackStudentComponent } from './side-bar-back-student.component';

describe('SideBarBackStudentComponent', () => {
  let component: SideBarBackStudentComponent;
  let fixture: ComponentFixture<SideBarBackStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarBackStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarBackStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
