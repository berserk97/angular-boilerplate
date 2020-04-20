import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodNotAllowedComponent } from './method-not-allowed.component';

describe('MethodNotAllowedComponent', () => {
  let component: MethodNotAllowedComponent;
  let fixture: ComponentFixture<MethodNotAllowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodNotAllowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodNotAllowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
