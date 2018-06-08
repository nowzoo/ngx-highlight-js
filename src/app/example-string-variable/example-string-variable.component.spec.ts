import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStringVariableComponent } from './example-string-variable.component';

describe('ExampleStringVariableComponent', () => {
  let component: ExampleStringVariableComponent;
  let fixture: ComponentFixture<ExampleStringVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleStringVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStringVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
