import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsAdd } from './mountains-add';

describe('MountainsAdd', () => {
  let component: MountainsAdd;
  let fixture: ComponentFixture<MountainsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainsAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
