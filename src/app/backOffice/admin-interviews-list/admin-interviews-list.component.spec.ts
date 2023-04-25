import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterviewsListComponent } from './admin-interviews-list.component';

describe('AdminInterviewsListComponent', () => {
  let component: AdminInterviewsListComponent;
  let fixture: ComponentFixture<AdminInterviewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInterviewsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInterviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
