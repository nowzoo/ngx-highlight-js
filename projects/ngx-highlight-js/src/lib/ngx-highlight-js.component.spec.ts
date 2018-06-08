import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHighlightJsComponent } from './ngx-highlight-js.component';

describe('NgxHighlightJsComponent', () => {
  let component: NgxHighlightJsComponent;
  let fixture: ComponentFixture<NgxHighlightJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHighlightJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHighlightJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
