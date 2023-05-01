import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBackComponent } from './event-back.component';

describe('EventBackComponent', () => {
  let component: EventBackComponent;
  let fixture: ComponentFixture<EventBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
