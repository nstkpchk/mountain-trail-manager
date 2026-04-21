import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsEdit } from './mountains-edit';

describe('MountainsEdit', () => {
  let component: MountainsEdit;
  let fixture: ComponentFixture<MountainsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
