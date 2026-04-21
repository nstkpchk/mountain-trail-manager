import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsEdit } from './trails-edit';

describe('TrailsEdit', () => {
  let component: TrailsEdit;
  let fixture: ComponentFixture<TrailsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
