import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => {
      window.scroll(0, 0);
    });
  }
}
