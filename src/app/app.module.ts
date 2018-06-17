import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgStringPipesModule } from 'angular-pipes';


import { NgxHighlightJsModule, NGX_HIGHLIGHT_JS_DEFAULT_THEME } from '@nowzoo/ngx-highlight-js';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxHighlightJsModule,
    NgStringPipesModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: NGX_HIGHLIGHT_JS_DEFAULT_THEME, useValue: 'atelier-cave-dark'}
  ]
})
export class AppModule { }
