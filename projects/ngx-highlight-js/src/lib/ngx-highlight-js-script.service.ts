import { Injectable, Inject } from '@angular/core';
import { Scriptload } from '@nowzoo/sheetload';

import {
  NGX_HIGHLIGHT_JS_URL
} from './ngx-highlight-js-options';

@Injectable({
  providedIn: 'root'
})
export class NgxHighlightJsScriptService {
  _loadedLanguages: Map<string, Promise<any>>;
  _hljs: any = null;
  _loadedPromise: Promise<any>;
  constructor(
    @Inject(NGX_HIGHLIGHT_JS_URL) private _jsURL: string
  ) {
    this._loadedLanguages = new Map();
  }

  loaded(): Promise<any> {
    if (this._loadedPromise) {
      return this._loadedPromise;
    }
    this._loadedPromise = new Promise((resolve, reject) => {
      const url = `${this._jsURL}/highlight.min.js`;
      Scriptload.load(url)
        .then(() => {
          setTimeout(() => {
            this._hljs = window['hljs'];
            resolve(this._hljs);
          }, 10);
        })
        .catch(reject);
    });
    return this._loadedPromise;
  }

  loadLanguage(lang: string): Promise<void> {
    let p = this._loadedLanguages.get(lang);
    if (p) {
      return p;
    }
    if (this._hljs && this._hljs.listLanguages().indexOf(lang) > -1) {
      p = Promise.resolve();
      this._loadedLanguages.set(lang, p);
      return p;
    }
    const url = `${this._jsURL}/languages/${lang}.min.js`;
    p = this.loaded()
      .then(() => {
        return Scriptload.load(url);
      });
    this._loadedLanguages.set(lang, p);
    return p;
  }
}
