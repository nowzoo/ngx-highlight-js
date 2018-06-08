import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSetThemeComponent } from './example-set-theme.component';

describe('ExampleSetThemeComponent', () => {
  let component: ExampleSetThemeComponent;
  let fixture: ComponentFixture<ExampleSetThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSetThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSetThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
