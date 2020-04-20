import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnauthorizedComponent } from './anauthorized.component';

describe('AnauthorizedComponent', () => {
  let component: AnauthorizedComponent;
  let fixture: ComponentFixture<AnauthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnauthorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
