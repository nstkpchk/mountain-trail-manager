import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsAdd } from './trails-add';

describe('TrailsAdd', () => {
  let component: TrailsAdd;
  let fixture: ComponentFixture<TrailsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
