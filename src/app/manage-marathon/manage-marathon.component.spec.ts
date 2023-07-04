import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMarathonComponent } from './manage-marathon.component';

describe('ManageMarathonComponent', () => {
  let component: ManageMarathonComponent;
  let fixture: ComponentFixture<ManageMarathonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMarathonComponent]
    });
    fixture = TestBed.createComponent(ManageMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
