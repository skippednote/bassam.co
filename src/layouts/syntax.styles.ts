import { injectGlobal } from 'react-emotion';

injectGlobal`
code[class*='language-'],
pre[class*='language-'] {
  font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
    'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
    'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #2a2734;
  color: #afa0fe;
}
pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #6a51e6;
}
pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #6a51e6;
}
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #6c6783;
}
.token.punctuation {
  color: #6c6783;
}
.token.namespace {
  opacity: 0.7;
}
.token.tag,
.token.operator,
.token.number {
  color: #e09142;
}
.token.property,
.token.function {
  color: #c4b9fe;
}
.token.tag-id,
.token.selector,
.token.atrule-id {
  color: #eeebff;
}
code.language-javascript,
.token.attr-name {
  color: #c4b9fe;
}
code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string,
.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
  color: #fc9;
}
.token.placeholder,
.token.variable {
  color: #fc9;
}
.token.deleted {
  text-decoration: line-through;
}
.token.inserted {
  border-bottom: 1px dotted #eeebff;
  text-decoration: none;
}
.token.italic {
  font-style: italic;
}
.token.important,
.token.bold {
  font-weight: bold;
}
.token.important {
  color: #c4b9fe;
}
.token.entity {
  cursor: help;
}
pre > code.highlight {
  outline: 0.4em solid #8a75f5;
  outline-offset: 0.4em;
}
.line-numbers .line-numbers-rows {
  border-right-color: #2c2937;
}
.line-numbers-rows > span:before {
  color: #3c3949;
}
.line-highlight {
  background: rgba(224, 145, 66, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(70%, rgba(224, 145, 66, 0.2)),
    to(rgba(224, 145, 66, 0))
  );
  background: linear-gradient(
    to right,
    rgba(224, 145, 66, 0.2) 70%,
    rgba(224, 145, 66, 0)
  );
}
`;
