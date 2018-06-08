
#ngx-highlight-js

Angular component and service for Highlight.js. Works with remote URLs or strings/variables. Loads highlight.js core, andlanguages and themes as needed. No dependencies.

[Demos](https://nowzoo.github.io/ngx-highlight-js/index.html)

## API
<section>
  <h3>Module: <code>NgxHighlightJsModule</code></h3>

  <ul class="list-unstyled">
    <li>
      <code>static forRoot(options?: INgxHighlightJsOptions)</code>
      <br>
      Optional configuration for theme and CDN.
    </li>
  </ul>
</section>
<section>
  <h3>Interface: <code>INgxHighlightJsOptions</code></h3>
  <ul class="list-unstyled">
    <li>
      <code>baseCdnURL?: string</code>
      <br>
      Where to find the highlight.js files. Default: <code>//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0</code>.
    </li>
    <li>
      <code>theme?: string</code>
      <br>
      The basename of the theme you want to use, like <code>'monokai-sublime'</code>. Default: <code>'default'</code>.
    </li>
  </ul>

</section>
<section>
  <h3>Service: <code>NgxHighlightJsService</code></h3>

  <h6>Methods</h6>
  <ul class="list-unstyled">
    <li>
      <code>hljs(): Promise&lt;any&gt;</code>
      <br>
      Ensures highlight.js is loaded, then resolves with the global
      <code>hljs</code> instance.
    </li>
    <li>
      <code>loadLanguage(lang: string): Promise&lt;any&gt;</code>
      <br>
      Ensures the language is loaded, then resolves with the global
      <code>hljs</code> instance.
    </li>
    <li>
      <code>highlight(lang: string, code: string): Promise&lt;string&gt;</code>
      <br>
      Highlights <code>code</code> with <code>lang</code>.
    </li>
    <li>
      <code>loadTheme(theme: string): Promise&lt;void&gt;</code>
      <br>
      Loads a different theme, globally. Use the basename of the theme, like <code>'dracula'</code>.

    </li>

  </ul>
  <h6>Property</h6>
  <ul class="list-unstyled">
    <li>
      <code>theme: string</code>
      <br>
      The currently loaded theme.
    </li>
  </ul>

</section>
<section>
  <h3>Component: <code>NgxHighlightJsComponent</code></h3>
  <p>
    selector: <code>ngx-highlight-js</code> | exportAs: <code>ngxHighlightJs</code>
  </p>
  <h6>Inputs</h6>
  <ul class="list-unstyled">
    <li>
      <code>code: string</code>
      <br>
      A string containing the code you want to highlight.
    </li>
    <li>
      <code>url: string</code>
      <br>
      A URL with the code you want to highlight.
    </li>
    <li>
      <code>lang: string</code>
      <br>
      Required. The language.
    </li>
  </ul>
  <h6>Properties</h6>
  <ul class="list-unstyled">
    <li>
      <code>isInitializing: boolean</code>
      <br>
      True when highlighting (or re-highlighting) the code.
    </li>
    <li>
      <code>error: string</code>
      <br>
      Set if highlighting fails.
    </li>
  </ul>

</section>
