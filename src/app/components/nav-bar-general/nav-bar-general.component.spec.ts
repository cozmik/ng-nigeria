import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGeneralComponent } from './nav-bar-general.component';

describe('NavBarGeneralComponent', () => {
  let component: NavBarGeneralComponent;
  let fixture: ComponentFixture<NavBarGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
