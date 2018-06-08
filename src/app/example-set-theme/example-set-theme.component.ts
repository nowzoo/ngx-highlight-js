import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxHighlightJsService } from '@nowzoo/ngx-highlight-js';
@Component({
  selector: 'app-example-set-theme',
  templateUrl: './example-set-theme.component.html',
  styleUrls: ['./example-set-theme.component.scss']
})
export class ExampleSetThemeComponent implements OnInit {

  fc: FormControl;
  themes: string[] = [
    'default',
    'color-brewer',
    'zenburn',
    'agate',
    'androidstudio',
    'dracula'
  ];

  constructor(private service: NgxHighlightJsService) { }

  ngOnInit() {
    this.fc = new FormControl(this.themes[0]);
    this.fc.valueChanges.subscribe((val) => {
      this.service.loadTheme(val);
    });
  }

}
