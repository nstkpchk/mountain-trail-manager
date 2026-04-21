import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsDetails } from './trails-details';

describe('TrailsDetails', () => {
  let component: TrailsDetails;
  let fixture: ComponentFixture<TrailsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
