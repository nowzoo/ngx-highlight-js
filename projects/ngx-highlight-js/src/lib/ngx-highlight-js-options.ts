export interface INgxHighlightJsOptions {
  baseCdnURL?: string;
  theme?: string;
}
export class NgxHighlightJsOptions implements INgxHighlightJsOptions {
  baseCdnURL = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0';
  theme = 'default';
}
