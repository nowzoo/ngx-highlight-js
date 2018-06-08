import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { NgxHighlightJsComponent } from './ngx-highlight-js.component';
import { NgxHighlightJsService } from './ngx-highlight-js.service';
import { HttpClient } from '@angular/common/http';

describe('NgxHighlightJsComponent', () => {
  let component: NgxHighlightJsComponent;
  let fixture: ComponentFixture<NgxHighlightJsComponent>;

  let service;
  let http;
  beforeEach(async(() => {
    service = {highlight: jasmine.createSpy().and.callFake(() => Promise.resolve('highlighted'))};
    http = {get: jasmine.createSpy().and.callFake(() => of('foo'))};
    TestBed.configureTestingModule({
      declarations: [ NgxHighlightJsComponent ],
      providers: [
        {provide: NgxHighlightJsService, useValue: service},
        {provide: HttpClient, useValue: http},
      ]
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

  describe('ngOnChanges', () => {
    it('should call onChange', () => {
      spyOn(component, 'onChange').and.callFake(() => {});
      component.ngOnChanges({});
      expect(component.onChange).toHaveBeenCalled();
    });
  });

  describe('fetchText', () => {
    it('should resoleve with code if url is null', fakeAsync(() => {
      let resolved;
      component.url = null;
      component.code = 'some code';
      component.fetchText().then((res) => resolved = res);
      tick();
      expect(resolved).toBe(component.code);
    }));
    it('should make an http call if component.url is truthy', fakeAsync(() => {
      let resolved;
      component.url = '/foo/bar';
      component.fetchText().then(() => resolved = true);
      expect(http.get).toHaveBeenCalledWith('/foo/bar', {responseType: 'text'});
      tick();
      expect(resolved).toBe(true);
    }));
    it('should reject if the http call fails', fakeAsync(() => {
      let rejected;
      http.get.and.callFake(() => throwError(new Error('foo')));
      component.url = '/foo/bar';
      component.fetchText().catch((e) => rejected = e);
      expect(http.get).toHaveBeenCalledWith('/foo/bar', {responseType: 'text'});
      tick();
      expect(rejected.message).toBe('foo');
    }));
  });

  describe('onChange()', () => {
    it('should handle success', fakeAsync(() => {
      spyOn(component, 'fetchText').and.callThrough();
      component.code = 'foo';
      component.lang = 'scss';
      component.onChange();
      expect(component.isInitializing).toBe(true);
      expect(component.fetchText).toHaveBeenCalled();
      tick();
      expect(service.highlight).toHaveBeenCalledWith(component.lang, component.code);
      expect(component.error).toBe(null);
      expect(component.highlightedHTML).toBe('highlighted');
      expect(component.isInitializing).toBe(false);

    }));
    it('should handle error', fakeAsync(() => {
      spyOn(component, 'fetchText').and.callFake(() => Promise.reject(new Error('foo')));
      component.code = 'foo';
      component.lang = 'scss';
      component.onChange();
      expect(component.isInitializing).toBe(true);
      expect(component.fetchText).toHaveBeenCalled();
      tick();
      expect(service.highlight).not.toHaveBeenCalledWith(component.lang, component.code);
      expect(component.error).toBeTruthy();
      expect(component.isInitializing).toBe(false);

    }));
  });
});
