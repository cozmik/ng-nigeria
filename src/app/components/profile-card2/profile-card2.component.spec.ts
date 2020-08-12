import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCard2Component } from './profile-card2.component';

describe('ProfileCard2Component', () => {
  let component: ProfileCard2Component;
  let fixture: ComponentFixture<ProfileCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
