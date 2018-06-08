import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxHighlightJsModule, INgxHighlightJsOptions } from '@nowzoo/ngx-highlight-js';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { QuickStartRouteComponent } from './quick-start-route/quick-start-route.component';
import { ApiRouteComponent } from './api-route/api-route.component';
import { ExamplesRouteComponent } from './examples-route/examples-route.component';
import { ExampleUrlComponent } from './example-url/example-url.component';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxHighlightJsModule.forRoot({theme: 'github'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
