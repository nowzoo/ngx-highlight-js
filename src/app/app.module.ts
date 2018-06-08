import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxHighlightJsModule, INgxHighlightJsOptions } from '@nowzoo/ngx-highlight-js';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { QuickStartRouteComponent } from './quick-start-route/quick-start-route.component';
import { ApiRouteComponent } from './api-route/api-route.component';
import { ExamplesRouteComponent } from './examples-route/examples-route.component';
import { ExampleUrlComponent } from './example-url/example-url.component';
import { ExampleUrlVariableComponent } from './example-url-variable/example-url-variable.component';
import { ExampleStringComponent } from './example-string/example-string.component';
import { ExampleStringVariableComponent } from './example-string-variable/example-string-variable.component';

const routes: Routes = [
  {path: 'examples', component: ExamplesRouteComponent},
  {path: 'api', component: ApiRouteComponent},
  {path: 'quick-start', component: QuickStartRouteComponent},
  {path: '', component: HomeRouteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    QuickStartRouteComponent,
    ApiRouteComponent,
    ExamplesRouteComponent,
    ExampleUrlComponent,
    ExampleUrlVariableComponent,
    ExampleStringComponent,
    ExampleStringVariableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxHighlightJsModule.forRoot({theme: 'github'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
