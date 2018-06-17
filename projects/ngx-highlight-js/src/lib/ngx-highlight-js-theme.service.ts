import { Injectable, Inject } from '@angular/core';
import { Sheetload } from '@nowzoo/sheetload';
import {
  NGX_HIGHLIGHT_JS_DEFAULT_THEME,
  NGX_HIGHLIGHT_JS_URL
} from './ngx-highlight-js-options';

@Injectable({
  providedIn: 'root'
})
export class NgxHighlightJsThemeService {
  _theme = 'default';
  _initializedPromise: Promise<void> = null;
  _linkEl: HTMLLinkElement = null;
  constructor(
    @Inject(NGX_HIGHLIGHT_JS_DEFAULT_THEME) private _defaultTheme: string,
    @Inject(NGX_HIGHLIGHT_JS_URL) private _jsURL: string
  ) {
    this._theme = _defaultTheme;
  }

  initialized(): Promise<void> {
    if (! this._initializedPromise) {
      this._initializedPromise = this.loadTheme(this._theme);
    }
    return this._initializedPromise;
  }

  loadTheme(name: string): Promise<void> {
    const url = `${this._jsURL}/styles/${name}.min.css`;
    return Sheetload.load(url)
      .then((linkEl: HTMLLinkElement) => {
        if (this._linkEl) {
          this._linkEl.remove();
        }
        this._linkEl = linkEl;
        this._linkEl.removeAttribute('disabled');
      });
  }

  get theme(): string {
    return this._theme;
  }

}
