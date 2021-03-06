import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaModalComponent } from './social-media-modal.component';

describe('SocialMediaModalComponent', () => {
  let component: SocialMediaModalComponent;
  let fixture: ComponentFixture<SocialMediaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
