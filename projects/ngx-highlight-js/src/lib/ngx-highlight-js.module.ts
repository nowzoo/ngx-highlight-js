import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxHighlightJsThemeService } from './ngx-highlight-js-theme.service';
import { NgxHighlightJsScriptService } from './ngx-highlight-js-script.service';
import { NgxHighlightJsService } from './ngx-highlight-js.service';
import {
  NGX_HIGHLIGHT_JS_DEFAULT_THEME,
  NGX_HIGHLIGHT_JS_URL
} from './ngx-highlight-js-options';
import { NgxHighlightJsComponent } from './ngx-highlight-js.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NgxHighlightJsComponent],
  exports: [NgxHighlightJsComponent],
  providers: [
    NgxHighlightJsThemeService,
    NgxHighlightJsScriptService,
    NgxHighlightJsService,
    {provide: NGX_HIGHLIGHT_JS_URL, useValue: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0'},
    {provide: NGX_HIGHLIGHT_JS_DEFAULT_THEME, useValue: 'default'},
  ]
})
export class NgxHighlightJsModule {}
