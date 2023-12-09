import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box; // This ensures padding does not affect width
    border-type: solid;
    border-color: red;
    border-width: 0.05rem;
  }

  html {
    font-size: 62.5%; // This sets 1rem to be 10px, easier for responsive typography
  }

  body {
    font-size: 1.6rem; // 16px as base size
    line-height: 1.5;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
