import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-example-url-variable',
  templateUrl: './example-url-variable.component.html',
  styleUrls: ['./example-url-variable.component.scss']
})
export class ExampleUrlVariableComponent implements OnInit {

  fc: FormControl;
  url: string;
  files: string[] = [
    '_alert.scss',
    '_badge.scss'
  ];
  constructor() { }

  ngOnInit() {
    this.fc = new FormControl(this.files[0]);
    this.fc.valueChanges.subscribe(val => {
      this.updateUrl();
    });
    this.updateUrl();

  }
  updateUrl() {
    this.url = `https://raw.githubusercontent.com/twbs/bootstrap/v4.1.1/scss/${this.fc.value}`;
  }

}
