import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetFailedComponent } from './password-reset-failed.component';

describe('PasswordResetFailedComponent', () => {
  let component: PasswordResetFailedComponent;
  let fixture: ComponentFixture<PasswordResetFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
