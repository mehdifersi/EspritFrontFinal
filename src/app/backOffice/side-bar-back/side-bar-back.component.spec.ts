import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarBackComponent } from './side-bar-back.component';

describe('SideBarBackComponent', () => {
  let component: SideBarBackComponent;
  let fixture: ComponentFixture<SideBarBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
