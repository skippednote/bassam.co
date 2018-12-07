import { injectGlobal } from 'react-emotion';

injectGlobal`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  background: linear-gradient(to bottom, #ffffff, #e2e2e2);
}

body {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 120%;
  text-align: center;
  margin-top: 35vh;
  line-height: 1.6;
  color: #522323;
}

input,
button {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

h2,
h3,
h4,
h5,
h6 {
    margin-top: 1.5rem;
}

p {
  margin-bottom: 1.5rem;
}

a,
a:visited {
  color: #522323;
}

a:hover {
  color: #00c6ff;
}

.gatsby-highlight {
  margin-left: -10rem;
  margin-right: -10rem;
  margin-bottom: 1.5rem;

  @media (max-width: 980px) {
    margin-left: 0;
    margin-right: 0;
  }
}

code[class*='language-'] {
  font-size: 110%;
}

:not(pre) > code[class*='language-'] {
  border-radius: 0;
  color: #fff;
  font-size: 90%;

  @media (max-width: 768px) {
    word-wrap: break-word;
    white-space: normal;
  }
}
`;
