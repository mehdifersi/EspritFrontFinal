import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationBackComponent } from './publication-back.component';

describe('PublicationBackComponent', () => {
  let component: PublicationBackComponent;
  let fixture: ComponentFixture<PublicationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
