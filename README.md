
# ngx-highlight-js

Angular component and service for Highlight.js. Works with remote URLs or strings/variables. Loads highlight.js core, andlanguages and themes as needed. No dependencies.

[Demos](https://nowzoo.github.io/ngx-highlight-js/index.html)

## API

### Module: `NgxHighlightJsModule`
`static forRoot()`


### Interface: `INgxHighlightJsOptions`

`baseCdnURL?: string`
Where to find the highlight.js files. Default: `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0`.

`theme?: string`
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
