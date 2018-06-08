import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-start-route',
  templateUrl: './quick-start-route.component.html',
  styleUrls: ['./quick-start-route.component.scss']
})
export class QuickStartRouteComponent implements OnInit {

  cmpWithURL = `<ngx-highlight-js lang="scss"
  url="https://raw.githubusercontent.com/twbs/bootstrap/v4.1.1/scss/_variables.scss"></ngx-highlight-js>`;
  cmpWithCode = `<!-- string... -->
<ngx-highlight-js lang="bash"
  code="npm i @nowzoo/ngx-highlight-js --save"></ngx-highlight-js>
<!-- variable... -->
<ngx-highlight-js lang="bash"
  [code]="myVar"></ngx-highlight-js>`;
  constructor() { }

  ngOnInit() {
  }

}
