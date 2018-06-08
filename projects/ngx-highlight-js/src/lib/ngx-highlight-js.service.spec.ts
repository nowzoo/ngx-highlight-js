import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Renderer2, RendererFactory2 } from '@angular/core';

import { NgxHighlightJsService } from './ngx-highlight-js.service';
import { NgxHighlightJsOptions, INgxHighlightJsOptions } from './ngx-highlight-js-options';


describe('NgxHighlightJsService', () => {
  let options: INgxHighlightJsOptions;
  let renderer: any;
  let rendererFactory: any;
  let service: NgxHighlightJsService;
  beforeEach(() => {
    options = {baseCdnURL: 'localhost', theme: 'foo'};
    renderer = {
      createElement: jasmine.createSpy(),
      setAttribute: jasmine.createSpy(),
      removeChild: jasmine.createSpy(),
      appendChild: jasmine.createSpy(),
      listen: jasmine.createSpy(),

    };
    rendererFactory = {createRenderer: jasmine.createSpy().and.returnValue(renderer)};
    TestBed.configureTestingModule({
      providers: [
        NgxHighlightJsService,
        {provide: NgxHighlightJsOptions, useValue: options},
        {provide: RendererFactory2, useValue: rendererFactory}
      ]
    });
    service = TestBed.get(NgxHighlightJsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create a renderer', () => {
    expect(rendererFactory.createRenderer).toHaveBeenCalled();
  });

  describe('initialized()', () => {
    let serviceAsPublic: any;
    beforeEach(() => {
      serviceAsPublic = service;
      spyOn(serviceAsPublic, 'loadTheme').and.callFake(() => Promise.resolve());
      spyOn(serviceAsPublic, 'loadAsset').and.callFake(() => Promise.resolve());
    });
    it('should resolve', fakeAsync(() => {
      let resolved = false;
      serviceAsPublic.initialized().then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic.loadTheme).toHaveBeenCalled();
      expect(serviceAsPublic.loadAsset).toHaveBeenCalled();
    }));
    it('should resolve if isInitialized is true', fakeAsync(() => {
      let resolved = false;
      serviceAsPublic.isInitialized = true;
      serviceAsPublic.initialized().then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic.loadTheme).not.toHaveBeenCalled();
      expect(serviceAsPublic.loadAsset).not.toHaveBeenCalled();
    }));
    it('should resolve if isInitializing is a promise', fakeAsync(() => {
      let resolved = false;
      serviceAsPublic.isInitializing = Promise.resolve();
      serviceAsPublic.initialized().then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic.loadTheme).not.toHaveBeenCalled();
      expect(serviceAsPublic.loadAsset).not.toHaveBeenCalled();
    }));

  });
  describe('loadAsset()', () => {
    let serviceAsPublic: any;
    let el;
    beforeEach(() => {
      serviceAsPublic = service;
      el = {};
      renderer.createElement.and.returnValue(el);
    });
    it('should resolve if the asset is already being added', fakeAsync(() => {
      let resolved = false;
      const url = options.baseCdnURL + '/' + 'foo.js';
      serviceAsPublic._assetPromises[url] = Promise.resolve();
      serviceAsPublic.loadAsset('foo.js')
        .then(() => {
          resolved = true;
        });
        tick();
        expect(resolved).toBe(true);
    }));
    it('should resolve immediately if the asset has already been added', fakeAsync(() => {
      let resolved = false;
      const url = options.baseCdnURL + '/' + 'foo.js';
      serviceAsPublic._loadedAssets[url] = 'shhjhgshgsh';
      serviceAsPublic.loadAsset('foo.js')
        .then(() => {
          resolved = true;
        });
        tick();
        expect(resolved).toBe(true);
    }));
    it('should call createElement for a script', () => {
      serviceAsPublic.loadAsset('foo.js');
      expect(renderer.createElement).toHaveBeenCalledWith('script');
      expect(renderer.setAttribute).toHaveBeenCalledWith(el, 'src', jasmine.any(String));
    });
    it('should call createElement for a css file', () => {
      serviceAsPublic.loadAsset('foo.css');
      expect(renderer.createElement).toHaveBeenCalledWith('link');
      expect(renderer.setAttribute).toHaveBeenCalledWith(el, 'href', jasmine.any(String));
      expect(renderer.setAttribute).toHaveBeenCalledWith(el, 'rel', 'stylesheet');
    });
    it('should append the el', () => {
      serviceAsPublic.loadAsset('foo.js');
      expect(renderer.setAttribute).toHaveBeenCalledWith(el, 'id', jasmine.any(String));

    });
    it('should add an id', () => {
      serviceAsPublic.loadAsset('foo.js');
      expect(renderer.appendChild).toHaveBeenCalledWith(document.head, el);
    });
    it('should remove the old css if it exists', () => {
      const oldEl = {};
      spyOn(document.head, 'querySelector').and.returnValue(oldEl);
      serviceAsPublic._currentThemeUrl = 'gsgggsf';
      serviceAsPublic.loadAsset('foo.css');
      expect(renderer.removeChild).toHaveBeenCalledWith(document.head, oldEl);
    });
    it('should resolve when the script loads', fakeAsync(() => {
      renderer.listen.and.callFake((theEl, type, fn) => {
        if (type === 'load') {
          fn();
        }
      });
      let resolved = false;
      serviceAsPublic.loadAsset('foo.js').then(() => resolved = true);
      expect(resolved).toBe(false);
      const event = new Event('load');
      tick();
      expect(resolved).toBe(true);

    }));
    it('should resolve when the style loads', fakeAsync(() => {
      renderer.listen.and.callFake((theEl, type, fn) => {
        if (type === 'load') {
          fn();
        }
      });
      let resolved = false;
      serviceAsPublic.loadAsset('foo.css').then(() => resolved = true);
      expect(resolved).toBe(false);
      const event = new Event('load');
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic._currentThemeUrl).toBe('localhost/foo.css');

    }));
    it('should reject if there is an error', fakeAsync(() => {
      renderer.listen.and.callFake((theEl, type, fn) => {
        if (type === 'error') {
          fn();
        }
      });
      let rejected = false;
      serviceAsPublic.loadAsset('foo.css').catch(() => rejected = true);
      expect(rejected).toBe(false);
      tick();
      expect(rejected).toBe(true);
    }));
  });

  describe('hljs()', () => {
    let serviceAsPublic: any;
    beforeEach(() => {
      serviceAsPublic = service;
      spyOn(serviceAsPublic, 'initialized').and.callFake(() => Promise.resolve());
    });
    it('should resolve with the global', fakeAsync(() => {
      const hljs = {};
      window['hljs'] = hljs;
      let result;
      service.hljs().then(h => result = h);
      tick();
      expect(result).toBe(hljs);
    }));
  });

  describe('loadTheme(theme)', () => {
    let serviceAsPublic: any;
    beforeEach(() => {
      serviceAsPublic = service;
      spyOn(serviceAsPublic, 'loadAsset').and.callFake(() => Promise.resolve());
    });
    it('should resolve', fakeAsync(() => {

      let result;
      service.loadTheme('foo').then(() => result = true);
      tick();
      expect(result).toBe(true);
      expect(serviceAsPublic.loadAsset).toHaveBeenCalledWith('styles/foo.min.css');
    }));
  });

  describe('highlight', () => {
    let hljs;
    beforeEach(() => {
      spyOn(service, 'loadLanguage').and.callFake(() => Promise.resolve());
      hljs = window['hljs'] = {
        highlight: jasmine.createSpy().and.returnValue({value: 'aaa'}),
      };
    });

    it('should resolve', fakeAsync(() => {
      let result;
      service.highlight('scss', 'foo bar').then((s) => result = s);
      tick();
      expect(result).toBe('aaa');
    }));
  });

  describe('loadLanguage(lang)', () => {
    let serviceAsPublic: any;
    let hljs;
    let loaded;
    beforeEach(() => {
      loaded = [];
      serviceAsPublic = service;
      spyOn(serviceAsPublic, 'loadAsset').and.callFake(() => Promise.resolve());
      hljs = window['hljs'] = {
        listLanguages: jasmine.createSpy().and.callFake(() => loaded)
      };
    });
    it('should resolve', fakeAsync(() => {
      let resolved;
      service.loadLanguage('foo').then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic.loadAsset).toHaveBeenCalled();
    }));
    it('should resolve if the lang is already loaded', fakeAsync(() => {
      let resolved;
      loaded = ['foo'];
      serviceAsPublic.isInitialized = true;
      service.loadLanguage('foo').then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect(serviceAsPublic.loadAsset).not.toHaveBeenCalled();
    }));
  });

  describe('currentTheme', () => {
    it('should return the currentTheme', () => {
      const serviceAsPublic: any = service;
      serviceAsPublic._currentTheme = 'foo';
      expect(service.currentTheme).toBe('foo');
    });
  });


});
