import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUrlVariableComponent } from './example-url-variable.component';

describe('ExampleUrlVariableComponent', () => {
  let component: ExampleUrlVariableComponent;
  let fixture: ComponentFixture<ExampleUrlVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleUrlVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUrlVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
