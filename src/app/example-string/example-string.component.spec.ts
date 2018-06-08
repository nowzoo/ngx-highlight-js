import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStringComponent } from './example-string.component';

describe('ExampleStringComponent', () => {
  let component: ExampleStringComponent;
  let fixture: ComponentFixture<ExampleStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
