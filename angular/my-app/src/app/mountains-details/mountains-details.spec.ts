import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsDetails } from './mountains-details';

describe('MountainsDetails', () => {
  let component: MountainsDetails;
  let fixture: ComponentFixture<MountainsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
