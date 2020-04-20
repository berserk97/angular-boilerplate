import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordEmailSentComponent } from './forgot-password-email-sent.component';

describe('ForgotPasswordEmailSentComponent', () => {
  let component: ForgotPasswordEmailSentComponent;
  let fixture: ComponentFixture<ForgotPasswordEmailSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordEmailSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordEmailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
