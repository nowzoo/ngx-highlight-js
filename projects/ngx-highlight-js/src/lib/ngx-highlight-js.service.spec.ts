import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgxHighlightJsThemeService } from './ngx-highlight-js-theme.service';
import { NgxHighlightJsScriptService } from './ngx-highlight-js-script.service';
import { NgxHighlightJsService } from './ngx-highlight-js.service';

describe('NgxHighlightJsService', () => {
  let themeService;
  let scriptService;
  let hljs;
  let service: NgxHighlightJsService;
  beforeEach(() => {
    hljs = {
      highlight: jasmine.createSpy().and.returnValue({value: 'hilited'})
    };
    scriptService = {
      loaded: jasmine.createSpy().and.returnValue(Promise.resolve(hljs)),
      loadLanguage: jasmine.createSpy().and.returnValue(Promise.resolve())
    };
    themeService = {
      _theme: 'foo-bar',
      loadTheme: jasmine.createSpy().and.returnValue(Promise.resolve()),
      initialized: jasmine.createSpy().and.returnValue(Promise.resolve())
    };
    TestBed.configureTestingModule({
      providers: [
        NgxHighlightJsService,
        {provide: NgxHighlightJsThemeService, useValue: themeService},
        {provide: NgxHighlightJsScriptService, useValue: scriptService},
      ]
    });
  });

  beforeEach(inject([NgxHighlightJsService], (s: NgxHighlightJsService) => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loaded()', () => {
    it('should resolve', fakeAsync(() => {
      let resolved;
      service.loaded().then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
    }));
    it('should make the right calls', () => {
      service.loaded();
      expect(themeService.initialized).toHaveBeenCalled();
      expect(scriptService.loaded).toHaveBeenCalled();
    });
    it('should make the right calls once', () => {
      service.loaded();
      service.loaded();
      expect(themeService.initialized).toHaveBeenCalledTimes(1);
      expect(scriptService.loaded).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadLanguage()', () => {
    it('should resolve with call to scriptService.loadLanguage', fakeAsync(() => {
      let resolved;
      service.loadLanguage('foo').then(r => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(scriptService.loadLanguage).toHaveBeenCalledWith('foo');
    }));
  });
  describe('loadTheme()', () => {
    it('should resolve with call to themeService.loadTheme', fakeAsync(() => {
      let resolved;
      service.loadTheme('foo').then(r => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(themeService.loadTheme).toHaveBeenCalledWith('foo');
    }));
  });

  describe('highlight()', () => {
    it('should resolve after making the right calls', fakeAsync(() => {
      let result;
      service.highlight('foo', 'some code').then(r => result = r);
      tick();
      expect(result).toBe('hilited');
      expect(hljs.highlight).toHaveBeenCalledWith('foo', 'some code', true);
      expect(scriptService.loadLanguage).toHaveBeenCalledWith('foo');
    }));

  });

  describe('theme', () => {
    it('should return themeService._theme', () => {
      expect(service.theme).toBe('foo-bar');
    });
  });

});
