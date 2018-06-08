import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartRouteComponent } from './quick-start-route.component';

describe('QuickStartRouteComponent', () => {
  let component: QuickStartRouteComponent;
  let fixture: ComponentFixture<QuickStartRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickStartRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickStartRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
