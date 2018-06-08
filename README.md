
# ngx-highlight-js

Angular component and service for Highlight.js. Works with remote URLs or strings/variables. Loads highlight.js core, andlanguages and themes as needed. No dependencies.

[Demos](https://nowzoo.github.io/ngx-highlight-js/index.html)

## Quick Start
Install the library with NPM...


```bash
npm i @nowzoo/ngx-highlight-js --save
```

Import into your `AppModule` with `NgxHighlightJsModule.forRoot()`...</p>
```ts
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
// other imports...
@NgModule({
imports: [
  NgxHighlightJsModule.forRoot(),
  // other imports...
]
})
export class AppModule { }
```

Add an `NgxHighlightJsComponent`. You can provide an absolute or relative URL with the `url` input...

```ts
<ngx-highlight-js lang="scss"
  url="https://raw.githubusercontent.com/twbs/bootstrap/v4.1.1/scss/_variables.scss">
</ngx-highlight-js>
```
Or use the `code` input to use a string or a variable...

```ts
<!-- string... -->
<ngx-highlight-js lang="bash"
  code="npm i @nowzoo/ngx-highlight-js --save"></ngx-highlight-js>
<!-- variable... -->
<ngx-highlight-js lang="bash"
  [code]="myVar"></ngx-highlight-js>
```
## API

### Module: `NgxHighlightJsModule`  

`static forRoot()`


### Class: `NgxHighlightJsOptions`

You can `provide` this in your module to change the theme or base URL for getting highlight.js.
```ts
providers: [
  {
    provide: NgxHighlightJsOptions,
    useValue: {
      baseCdnURL: '//another.cdn/path',
      theme: 'dracula'
    }
  }
]
```
`baseCdnURL: string`  
Where to find the highlight.js files. Default: `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0`.

`theme: string`  
The basename of the theme you want to use, like `'monokai-sublime'`. Default: `'default'`.



### Service: `NgxHighlightJsService`

**Methods**

`hljs(): Promise<any>`  
Ensures highlight.js is loaded, then resolves with the global `hljs` instance.

`loadLanguage(lang: string): Promise<any>`  
Ensures the language is loaded, then resolves with the global `hljs` instance.

`highlight(lang: string, code: string): Promise<string>`  
Highlights `code` with `lang`.

`loadTheme(theme: string): Promise<void>`  
Loads a different theme, globally. Use the basename of the theme, like `'dracula'`.

**Properties**

`theme: string`  
The currently loaded theme.

### Component: `NgxHighlightJsComponent`
selector: `ngx-highlight-js` | exportAs: `ngxHighlightJs`

**Inputs**

`code: string`  
A string containing the code you want to highlight.

`url: string`  
A URL with the code you want to highlight.

`lang: string`  
Required. The language.

**Properties**

`isInitializing: boolean`
True when highlighting (or re-highlighting) the code.

`error: string`
Set if highlighting fails.
