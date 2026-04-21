import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mountains } from './mountains';

describe('Mountains', () => {
  let component: Mountains;
  let fixture: ComponentFixture<Mountains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mountains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mountains);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
