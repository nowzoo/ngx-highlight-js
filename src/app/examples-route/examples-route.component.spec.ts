import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesRouteComponent } from './examples-route.component';

describe('ExamplesRouteComponent', () => {
  let component: ExamplesRouteComponent;
  let fixture: ComponentFixture<ExamplesRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
