import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUrlComponent } from './example-url.component';

describe('ExampleUrlComponent', () => {
  let component: ExampleUrlComponent;
  let fixture: ComponentFixture<ExampleUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
