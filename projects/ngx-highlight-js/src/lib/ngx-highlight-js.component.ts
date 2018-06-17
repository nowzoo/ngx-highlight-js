import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { NgxHighlightJsService } from './ngx-highlight-js.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-highlight-js',
  exportAs: `ngxHighlightJs`,
  template: `<pre><code
      [ngClass]="'hljs ' + lang"
      [innerHTML]="highlightedHTML"></code></pre>`,
})
export class NgxHighlightJsComponent implements OnInit, OnChanges {

  @Input() code: string;
  @Input() url: string;
  @Input() lang: string;

  highlightedHTML = '';
  error: string = null;
  isInitializing: boolean;

  private afterInit = false;

  constructor(
    private service: NgxHighlightJsService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.onChange();
    this.afterInit = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.afterInit) {
      this.onChange();
    }
  }


  fetchText(): Promise<string> {
    if (! this.url) {
      return Promise.resolve(this.code || '');
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.url, {responseType: 'text'}).subscribe(
        (text) => resolve(text), (err) => reject(err)
      );
    });

  }

  onChange() {
    this.error = null;
    this.isInitializing = true;
    this.fetchText()
      .then((text: string) => {
        return this.service.highlight(this.lang, text);
      })
      .then((hl) => {
        this.highlightedHTML = hl;
        this.isInitializing = false;
      })
      .catch(e => {
        this.error = e.toString();
        this.isInitializing = false;
      });
  }
}
