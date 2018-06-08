import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxHighlightJsComponent } from './ngx-highlight-js.component';
import { NgxHighlightJsService } from './ngx-highlight-js.service';
import { NgxHighlightJsOptions, INgxHighlightJsOptions } from './ngx-highlight-js-options';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NgxHighlightJsComponent],
  exports: [NgxHighlightJsComponent]
})
export class NgxHighlightJsModule {
  public static forRoot(options?: INgxHighlightJsOptions): ModuleWithProviders {
    const defaultOptions = new NgxHighlightJsOptions();
    options = options || defaultOptions;
    options = Object.assign({}, defaultOptions, options);
    return {ngModule: NgxHighlightJsModule, providers: [
      NgxHighlightJsService,
      {provide: NgxHighlightJsOptions, useValue: options}
    ]};
  }
}
