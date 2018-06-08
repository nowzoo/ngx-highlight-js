import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-route',
  templateUrl: './examples-route.component.html',
  styleUrls: ['./examples-route.component.scss']
})
export class ExamplesRouteComponent implements OnInit {

  ex1Code = `<ngx-highlight-js
  lang="scss"
  url="https://raw.githubusercontent.com/twbs/bootstrap/v4.1.1/scss/utilities/_align.scss">
</ngx-highlight-js>`;

  constructor() { }

  ngOnInit() {
  }

}
