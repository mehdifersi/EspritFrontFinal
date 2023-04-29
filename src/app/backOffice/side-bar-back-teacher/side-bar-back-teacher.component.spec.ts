import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarBackTeacherComponent } from './side-bar-back-teacher.component';

describe('SideBarBackTeacherComponent', () => {
  let component: SideBarBackTeacherComponent;
  let fixture: ComponentFixture<SideBarBackTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarBackTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarBackTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
