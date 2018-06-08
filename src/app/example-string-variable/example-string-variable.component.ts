import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-string-variable',
  templateUrl: './example-string-variable.component.html',
  styleUrls: ['./example-string-variable.component.scss']
})
export class ExampleStringVariableComponent implements OnInit {

  code = `$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #6c757d !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black:    #000 !default;`;
  constructor() { }

  ngOnInit() {
  }

}