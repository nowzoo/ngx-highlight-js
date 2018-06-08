import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgxHighlightJsOptions } from './ngx-highlight-js-options';
declare const hljs: any;
@Injectable({
  providedIn: 'root'
})
export class NgxHighlightJsService {
  private _loadedAssets: {[url: string]: string} = {};
  private _currentThemeUrl: string = null;
  private _assetPromises: {[url: string]: Promise<any>} = {};
  private renderer: Renderer2;
  private isInitializing: false | Promise<void> = false;
  private isInitialized = false;

  constructor(
    private options: NgxHighlightJsOptions,
    private http: HttpClient,
    rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private initialized(): Promise<any> {

    if (this.isInitialized) {
      return Promise.resolve();
    }
    if (this.isInitializing) {
      return this.isInitializing;
    }

    const promises = [];

    promises.push(this.loadAsset(`styles/${this.options.theme}.min.css`));
    promises.push(this.loadAsset(`highlight.min.js`));
    this.isInitializing = Promise.all(promises)
      .then(() => {
        this.isInitialized = true;
      });
    return this.isInitializing;

  }

  private loadAsset(filePath: string): Promise<void> {
    const url = this.options.baseCdnURL + '/' + filePath;
    if (this._assetPromises[url]) {
      return this._assetPromises[url];
    }
    this._assetPromises[url] = new Promise((resolve, reject) => {
      const containerEl = document.head;
      if (this._loadedAssets[url]) {
        return resolve();
      }
      const isTheme = filePath.match(/css$/);
      const id = filePath.replace(/\W/g, '-');
      const el = this.renderer.createElement(isTheme ? 'link' : 'script');
      this.renderer.setAttribute(el, 'id', id);
      if (isTheme) {
        this.renderer.setAttribute(el, 'href', url);
        this.renderer.setAttribute(el, 'rel', 'stylesheet');
        if (this._currentThemeUrl) {
          delete this._assetPromises[this._currentThemeUrl];
          const oldLink = containerEl.querySelector('#' + this._loadedAssets[this._currentThemeUrl]);
          if (oldLink) {
            this.renderer.removeChild(containerEl, oldLink);
          }
        }
      } else {
        this.renderer.setAttribute(el, 'src', url);
      }
      this.renderer.listen(el, 'load', () => {
        this._loadedAssets[url] = id;
        if (isTheme) {
          this._currentThemeUrl = url;
        }
        resolve();
      });
      this.renderer.listen(el, 'error', () => {
        this.renderer.removeChild(containerEl, el);
        reject(`The highlight.js asset at ${url} could not be loaded.`);
      });
      this.renderer.appendChild(containerEl, el);
    });
    return this._assetPromises[url];
  }



  loadLanguage(lang: string): Promise<any> {
    if (this.isInitialized && hljs.listLanguages().indexOf(lang) >= 0) {
      return Promise.resolve(hljs);
    }
    return this.initialized()
      .then(() => {
        const filePath = `languages/${lang}.min.js`;
        return this.loadAsset(filePath);
      })
      .then(() => {
        return hljs;
      });
  }

  hljs(): Promise<any> {
    return this.initialized()
      .then(() => {
        return hljs;
      });
  }

  loadTheme(theme: string) {
    return this.loadAsset(`styles/${theme}.min.css`);
  }


  highlight(lang: string, code: string): Promise<string> {
    return this.loadLanguage(lang)
      .then(() => {
        const hl = hljs.fixMarkup(hljs.highlight(lang, code).value);
        return hl;
      });
  }

}
