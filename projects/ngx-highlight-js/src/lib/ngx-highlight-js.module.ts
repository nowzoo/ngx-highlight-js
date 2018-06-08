import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxHighlightJsComponent } from './ngx-highlight-js.component';
import { NgxHighlightJsService } from './ngx-highlight-js.service';
import { NgxHighlightJsOptions } from './ngx-highlight-js-options';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NgxHighlightJsComponent],
  exports: [NgxHighlightJsComponent],
  providers: [NgxHighlightJsService, {provide: NgxHighlightJsOptions, useClass: NgxHighlightJsOptions}]
})
export class NgxHighlightJsModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: NgxHighlightJsModule, providers: [NgxHighlightJsService,
      {provide: NgxHighlightJsOptions, useClass: NgxHighlightJsOptions}]};
  }
}
