import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Scriptload } from '@nowzoo/sheetload';
import { NgxHighlightJsScriptService } from './ngx-highlight-js-script.service';
import {
  NGX_HIGHLIGHT_JS_URL
} from './ngx-highlight-js-options';

describe('NgxHighlightJsScriptService', () => {
  let service: NgxHighlightJsScriptService;
  let scriptEl;
  let baseURL;
  let baseLoadP;
  let loadSpy;
  let hljs;
  beforeEach(() => {
    baseURL = '//localhost/highlight.js/9.12.0';
    scriptEl = document.createElement('script');
    baseLoadP = Promise.resolve(scriptEl);
    loadSpy = spyOn(Scriptload, 'load').and.returnValue(baseLoadP);
    hljs = window['hljs'] = {
      listLanguages: jasmine.createSpy().and.returnValue([])
    };
    TestBed.configureTestingModule({
      providers: [
        NgxHighlightJsScriptService,
        {provide: NGX_HIGHLIGHT_JS_URL, useValue: baseURL},
      ]
    });
  });
  beforeEach(inject([NgxHighlightJsScriptService], (s: NgxHighlightJsScriptService) => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loaded()', () => {
    it('should load the right URL', () => {
      service.loaded();
      expect(Scriptload.load).toHaveBeenCalledWith(baseURL + '/highlight.min.js');
    });
    it('should only load the script once', fakeAsync(() => {
      let firstP, secondP;
      let resolved;
      firstP = service.loaded();
      secondP = service.loaded();
      Promise.all([firstP, secondP])
        .then(() => resolved = true);
      tick(20);
      expect(resolved).toBe(true);
      expect(Scriptload.load).toHaveBeenCalledTimes(1);
      expect(firstP).toBe(secondP);
    }));
    it('should resolve', fakeAsync(() => {
      let resolved;
      service.loaded().then(() => resolved = true);
      tick(20);
      expect(resolved).toBe(true);
    }));
    it('should reject if load rejects', fakeAsync(() => {
      loadSpy.and.returnValue(Promise.reject('err'));
      let rejected;
      service.loaded().catch((e) => rejected = e);
      tick();
      expect(rejected).toBe('err');
    }));
  });
  describe('loadLanguage', () => {
    it('should load the right file', fakeAsync(() => {
      service.loadLanguage('foo');
      tick(20);
      expect(Scriptload.load).toHaveBeenCalledWith(baseURL + '/languages/foo.min.js');
    }));
    it('should resolve', fakeAsync(() => {
      let resolved;
      service.loadLanguage('foo').then(() => resolved = true);
      tick(20);
      expect(resolved).toBe(true);
    }));
    it('should set the map entry', fakeAsync(() => {
      let resolved;
      service.loadLanguage('foo').then(() => resolved = true);
      tick(20);
      expect(resolved).toBe(true);
      expect(service._loadedLanguages.get('foo')).toBeTruthy();
    }));
    it('should not download if the language was loaded according to hljs', fakeAsync(() => {
      let resolved;
      service._hljs = hljs;
      service._loadedPromise = Promise.resolve();
      hljs.listLanguages.and.returnValue(['foo']);
      service.loadLanguage('foo').then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(Scriptload.load).not.toHaveBeenCalledWith(baseURL + '/languages/foo.min.js');
    }));
    it('should not download twice', fakeAsync(() => {
      let resolved;
      service._hljs = hljs;
      service._loadedPromise = Promise.resolve();
      Promise.all([service.loadLanguage('foo'), service.loadLanguage('foo'), service.loadLanguage('foo')])
        .then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(Scriptload.load).toHaveBeenCalledTimes(1);
    }));
  });
});
