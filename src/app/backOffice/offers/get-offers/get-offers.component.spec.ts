import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOffersComponent } from './get-offers.component';

describe('GetOffersComponent', () => {
  let component: GetOffersComponent;
  let fixture: ComponentFixture<GetOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
