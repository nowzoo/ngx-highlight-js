import { Component, OnInit } from '@angular/core';
declare const hljs: any;
import { NgxHighlightJsService } from '@nowzoo/ngx-highlight-js';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

  npmI = `<ngx-highlight-js
  lang="bash"
  code="npm i @nowzoo/ngx-highlight-js --save">
</ngx-highlight-js>`;
  constructor(
    private service: NgxHighlightJsService
  ) { }

  ngOnInit() {
    // this.service.initialized().then(() => {
    //   return this.service.loadLanguage('xml');
    // })
    // .then(() => {
    //   hljs.configure({useBR: true, tabReplace: '   '});
    //   const hl = hljs.fixMarkup(hljs.highlight('xml', '<p>\n\tFoo\n</p>').value);
    //   console.log(hl);
    // });
  }



}
