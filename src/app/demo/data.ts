export interface ITheme {themeTitle: string; themeName: string; }

export const themesList: ITheme[] = [
  {themeTitle: 'Not Found', themeName: 'not-found'},
  {themeTitle: 'Default', themeName: 'default'},
  {themeTitle: 'Agate', themeName: 'agate'},
  {themeTitle: 'Androidstudio', themeName: 'androidstudio'},
  {themeTitle: 'Arduino Light', themeName: 'arduino-light'},
  {themeTitle: 'Arta', themeName: 'arta'},
  {themeTitle: 'Ascetic', themeName: 'ascetic'},
  {themeTitle: 'Atelier Cave Dark', themeName: 'atelier-cave-dark'},
  {themeTitle: 'Atelier Cave Light', themeName: 'atelier-cave-light'},
  {themeTitle: 'Atelier Dune Dark', themeName: 'atelier-dune-dark'},
  {themeTitle: 'Atelier Dune Light', themeName: 'atelier-dune-light'},
  {themeTitle: 'Atelier Estuary Dark', themeName: 'atelier-estuary-dark'},
  {themeTitle: 'Atelier Estuary Light', themeName: 'atelier-estuary-light'},
  {themeTitle: 'Atelier Forest Dark', themeName: 'atelier-forest-dark'},
  {themeTitle: 'Atelier Forest Light', themeName: 'atelier-forest-light'},
  {themeTitle: 'Atelier Heath Dark', themeName: 'atelier-heath-dark'},
  {themeTitle: 'Atelier Heath Light', themeName: 'atelier-heath-light'},
  {themeTitle: 'Atelier Lakeside Dark', themeName: 'atelier-lakeside-dark'},
  {themeTitle: 'Atelier Lakeside Light', themeName: 'atelier-lakeside-light'},
  {themeTitle: 'Atelier Plateau Dark', themeName: 'atelier-plateau-dark'},
  {themeTitle: 'Atelier Plateau Light', themeName: 'atelier-plateau-light'},
  {themeTitle: 'Atelier Savanna Dark', themeName: 'atelier-savanna-dark'},
  {themeTitle: 'Atelier Savanna Light', themeName: 'atelier-savanna-light'},
  {themeTitle: 'Atelier Seaside Dark', themeName: 'atelier-seaside-dark'},
  {themeTitle: 'Atelier Seaside Light', themeName: 'atelier-seaside-light'},
  {themeTitle: 'Atelier Sulphurpool Dark', themeName: 'atelier-sulphurpool-dark'},
  {themeTitle: 'Atelier Sulphurpool Light', themeName: 'atelier-sulphurpool-light'},
  {themeTitle: 'Atom One Dark', themeName: 'atom-one-dark'},
  {themeTitle: 'Atom One Light', themeName: 'atom-one-light'},
  {themeTitle: 'Brown Paper', themeName: 'brown-paper'},
  {themeTitle: 'Codepen Embed', themeName: 'codepen-embed'},
  {themeTitle: 'Color Brewer', themeName: 'color-brewer'},
  {themeTitle: 'Darcula', themeName: 'darcula'},
  {themeTitle: 'Dark', themeName: 'dark'},
  {themeTitle: 'Darkula', themeName: 'darkula'},
  {themeTitle: 'Docco', themeName: 'docco'},
  {themeTitle: 'Dracula', themeName: 'dracula'},
  {themeTitle: 'Far', themeName: 'far'},
  {themeTitle: 'Foundation', themeName: 'foundation'},
  {themeTitle: 'Github Gist', themeName: 'github-gist'},
  {themeTitle: 'Github', themeName: 'github'},
  {themeTitle: 'Googlecode', themeName: 'googlecode'},
  {themeTitle: 'Grayscale', themeName: 'grayscale'},
  {themeTitle: 'Gruvbox Dark', themeName: 'gruvbox-dark'},
  {themeTitle: 'Gruvbox Light', themeName: 'gruvbox-light'},
  {themeTitle: 'Hopscotch', themeName: 'hopscotch'},
  {themeTitle: 'Hybrid', themeName: 'hybrid'},
  {themeTitle: 'Idea', themeName: 'idea'},
  {themeTitle: 'Ir Black', themeName: 'ir-black'},
  {themeTitle: 'Kimbie Dark', themeName: 'kimbie.dark'},
  {themeTitle: 'Kimbie Light', themeName: 'kimbie.light'},
  {themeTitle: 'Magula', themeName: 'magula'},
  {themeTitle: 'Mono Blue', themeName: 'mono-blue'},
  {themeTitle: 'Monokai Sublime', themeName: 'monokai-sublime'},
  {themeTitle: 'Monokai', themeName: 'monokai'},
  {themeTitle: 'Obsidian', themeName: 'obsidian'},
  {themeTitle: 'Ocean', themeName: 'ocean'},
  {themeTitle: 'Paraiso Dark', themeName: 'paraiso-dark'},
  {themeTitle: 'Paraiso Light', themeName: 'paraiso-light'},
  {themeTitle: 'Pojoaque', themeName: 'pojoaque'},
  {themeTitle: 'Purebasic', themeName: 'purebasic'},
  {themeTitle: 'Qtcreator Dark', themeName: 'qtcreator_dark'},
  {themeTitle: 'Qtcreator Light', themeName: 'qtcreator_light'},
  {themeTitle: 'Railscasts', themeName: 'railscasts'},
  {themeTitle: 'Rainbow', themeName: 'rainbow'},
  {themeTitle: 'Routeros', themeName: 'routeros'},
  {themeTitle: 'School Book', themeName: 'school-book'},
  {themeTitle: 'Solarized Dark', themeName: 'solarized-dark'},
  {themeTitle: 'Solarized Light', themeName: 'solarized-light'},
  {themeTitle: 'Sunburst', themeName: 'sunburst'},
  {themeTitle: 'Tomorrow Night Blue', themeName: 'tomorrow-night-blue'},
  {themeTitle: 'Tomorrow Night Bright', themeName: 'tomorrow-night-bright'},
  {themeTitle: 'Tomorrow Night Eighties', themeName: 'tomorrow-night-eighties'},
  {themeTitle: 'Tomorrow Night', themeName: 'tomorrow-night'},
  {themeTitle: 'Tomorrow', themeName: 'tomorrow'},
  {themeTitle: 'Vs', themeName: 'vs'},
  {themeTitle: 'Vs 2015', themeName: 'vs2015'},
  {themeTitle: 'Xcode', themeName: 'xcode'},
  {themeTitle: 'Xt 256', themeName: 'xt256'},
  {themeTitle: 'Zenburn', themeName: 'zenburn'}
];

export interface IDisplayData {value: string; lang: string; url: boolean; }
export const displaysList: IDisplayData[] = [
  {
    value: 'https://raw.githubusercontent.com/angular/angularfire2/master/src/database/database.ts',
    lang: 'typescript',
    url: true
  },
  {
    value: 'https://raw.githubusercontent.com/twbs/bootstrap/v4.1.1/scss/_alert.scss',
    lang: 'scss',
    url: true
  },
  {
    value: 'https://raw.githubusercontent.com/symfony/symfony/master/src/Symfony/Component/Asset/Context/ContextInterface.php',
    lang: 'php',
    url: true
  },
  {
    lang: 'bash',
    value: 'npm i @nowzoo/ngx-highlight-js --save',
    url: false
  },
  {
    url: false,
    lang: 'typescript',
    value: `import { Component, OnInit } from '@angular/core';
  import { FormControl } from '@angular/forms';`
  },
  {
    url: false,
    lang: 'scss',
    value: `.route-header {
    margin: 2em 0;
    padding-bottom: 1em;
    border-bottom: 2px solid #DDD;
  }`
  },
  {
  url: false,
  lang: 'json',
  value: `[
    {
      "title": "apples",
      "count": [12000, 20000],
      "description": {"text": "...", "sensitive": false}
    },
    {
      "title": "oranges",
      "count": [17500, null],
      "description": {"text": "...", "sensitive": false}
    }
  ]`
  },
];
