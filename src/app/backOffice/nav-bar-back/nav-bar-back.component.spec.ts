import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBackComponent } from './nav-bar-back.component';

describe('NavBarBackComponent', () => {
  let component: NavBarBackComponent;
  let fixture: ComponentFixture<NavBarBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
