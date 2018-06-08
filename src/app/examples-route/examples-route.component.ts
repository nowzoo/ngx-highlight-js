import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-examples-route',
  templateUrl: './examples-route.component.html',
  styleUrls: ['./examples-route.component.scss']
})
export class ExamplesRouteComponent implements OnInit {


  example: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.example = val.example || 'string';
    });
  }

}
