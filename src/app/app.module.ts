import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxHighlightJsModule, NgxHighlightJsOptions } from '@nowzoo/ngx-highlight-js';
import { AppComponent } from './app.component';
import { ExamplesRouteComponent } from './examples-route/examples-route.component';
import { ExampleUrlComponent } from './example-url/example-url.component';
import { ExampleUrlVariableComponent } from './example-url-variable/example-url-variable.component';
import { ExampleStringComponent } from './example-string/example-string.component';
import { ExampleStringVariableComponent } from './example-string-variable/example-string-variable.component';
import { ExampleSetThemeComponent } from './example-set-theme/example-set-theme.component';

const routes: Routes = [
  {path: '', component: ExamplesRouteComponent},
];
const opts = new NgxHighlightJsOptions();
opts.theme = 'monokai-sublime';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesRouteComponent,
    ExampleUrlComponent,
    ExampleUrlVariableComponent,
    ExampleStringComponent,
    ExampleStringVariableComponent,
    ExampleSetThemeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxHighlightJsModule.forRoot()
  ],
  providers: [{provide: NgxHighlightJsOptions, useValue: opts}],
  bootstrap: [AppComponent]
})
export class AppModule { }
