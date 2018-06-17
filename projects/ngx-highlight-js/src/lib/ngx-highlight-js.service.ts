import { Injectable } from '@angular/core';
import { NgxHighlightJsThemeService } from './ngx-highlight-js-theme.service';
import { NgxHighlightJsScriptService } from './ngx-highlight-js-script.service';
@Injectable({
  providedIn: 'root'
})
export class NgxHighlightJsService {
  private _hljs: any;
  private _loadedPromise: Promise<any>;
  get hljs(): any {
    return this._hljs;
  }

  get theme(): string {
    return this.themeService._theme;
  }
  constructor(
    private themeService: NgxHighlightJsThemeService,
    private scriptService: NgxHighlightJsScriptService
  ) { }

  loaded(): Promise<any> {
    if (this._loadedPromise) {
      return this._loadedPromise;
    }
    const promises = [this.scriptService.loaded(), this.themeService.initialized()];
    this._loadedPromise = Promise.all(promises)
      .then((results) => {
        this._hljs = results[0];
        return (this._hljs);
      });
    return this._loadedPromise;
  }

  loadLanguage(lang: string): Promise<void> {
    return this.scriptService.loadLanguage(lang);
  }

  loadTheme(name: string): Promise<void> {
    return this.themeService.loadTheme(name);
  }

  highlight(lang: string, code: string): Promise<string> {
    return this.loaded()
      .then(() => {
        return this.loadLanguage(lang);
      })
      .then(() => {
        const hl = this.hljs.highlight(lang, code, true).value;
        return hl;
      });
  }

}
