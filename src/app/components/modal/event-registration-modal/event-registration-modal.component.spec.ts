import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationModalComponent } from './event-registration-modal.component';

describe('EventRegistrationModalComponent', () => {
  let component: EventRegistrationModalComponent;
  let fixture: ComponentFixture<EventRegistrationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistrationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistrationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
