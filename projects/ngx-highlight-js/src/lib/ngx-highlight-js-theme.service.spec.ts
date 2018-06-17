import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Renderer2, RendererFactory2 } from '@angular/core';
import { Sheetload } from '@nowzoo/sheetload';
import { NgxHighlightJsThemeService } from './ngx-highlight-js-theme.service';
import {
  NGX_HIGHLIGHT_JS_DEFAULT_THEME,
  NGX_HIGHLIGHT_JS_URL
} from './ngx-highlight-js-options';

describe('NgxHighlightJsThemeService', () => {

  let element: any;

  beforeEach(() => {

    element = document.createElement('link');
    spyOn(element, 'removeAttribute').and.callThrough();
    spyOn(element, 'remove').and.callThrough();
    spyOn(Sheetload, 'load').and.returnValue(Promise.resolve(element));

    TestBed.configureTestingModule({
      providers: [
        NgxHighlightJsThemeService,
        {provide: NGX_HIGHLIGHT_JS_URL, useValue: '//localhost/highlight.js/9.12.0'},
        {provide: NGX_HIGHLIGHT_JS_DEFAULT_THEME, useValue: 'default'},
      ]
    });
  });

  let service: NgxHighlightJsThemeService;
  beforeEach(inject([NgxHighlightJsThemeService], (s: NgxHighlightJsThemeService) => {
    service = s;
  }));


  describe('constructor', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('should set  _theme', () => {
      expect(service.theme).toBe('default');
    });


  });



  describe('initialized()', () => {
    beforeEach(() => {
      spyOn(service, 'loadTheme').and.returnValue(Promise.resolve());
    });
    it('should not load the theme if the process has already been initialized', fakeAsync(() => {
      let result;
      service._initializedPromise = Promise.resolve();
      service.initialized().then(() => result = true);
      tick();
      expect(result).toBe(true);
      expect(service.loadTheme).not.toHaveBeenCalled();
    }));
    it('should not load the theme if the initial promise rejects', fakeAsync(() => {
      let result;
      service._initializedPromise = Promise.reject('foo');
      service.initialized().catch(() => result = true);
      tick();
      expect(result).toBe(true);
      expect(service.loadTheme).not.toHaveBeenCalled();
    }));
    it('should load the theme if the process has not already been initialized', fakeAsync(() => {
      let result;
      service.initialized().then(() => result = true);
      tick();
      expect(result).toBe(true);
      expect(service.loadTheme).toHaveBeenCalledWith('default');
    }));
    it('should handle rejection', fakeAsync(() => {
      let result;
      (service.loadTheme as any).and.returnValue(Promise.reject('foo'));
      service.initialized().catch(() => result = true);
      tick();
      expect(result).toBe(true);
      expect(service.loadTheme).toHaveBeenCalledWith('default');
    }));
  });

  describe('loadTheme', () => {
    it('should resolve when the theme loads', fakeAsync(() => {
      let result;
      service.loadTheme('foo-bar').then(() => result = true);
      tick();
      expect(result).toBe(true);
    }));
    it('should remove the old link', fakeAsync(() => {
      let result;
      service.loadTheme('foo-bar')
        .then(() => {
          return service.loadTheme('bar-foo');
        })
        .then(() => result = true);
      tick();
      expect(element.remove).toHaveBeenCalled();
    }));
  });
});
