import { Component, OnInit } from '@angular/core';
import { NgxHighlightJsService } from '@nowzoo/ngx-highlight-js';
import { ITheme, themesList, IDisplayData, displaysList } from './data';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  display: {value: string, lang: string, url: boolean};
  loadingDisplay = false;
  displayError: any = null;
  theme: ITheme;
  themes: ITheme[] = themesList;
  loadingTheme = false;
  themeError: any = null;
  displays: IDisplayData[] = displaysList;



  constructor(
    private service: NgxHighlightJsService
  ) { }

  ngOnInit() {
    const themeName = this.service.theme;
    this.theme = this.themes.find((e) => e.themeName === this.service.theme);
    this.display = this.displays[0];
  }

  loadTheme(event: Event, theme: ITheme) {
    if (event) {
      event.preventDefault();
    }

    this.loadingTheme = true;
    this.themeError = null;
    this.theme = theme;
    this.service.loadTheme(theme.themeName)
      .then(() => {
        this.loadingTheme = false;
      })
      .catch((e) => {
        this.themeError = e;
        this.loadingTheme = false;
      });
  }

  setDisplay(event: Event, display: IDisplayData) {
    event.preventDefault();
    this.display = display;
  }

}
