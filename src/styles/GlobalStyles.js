import { createGlobalStyle } from 'styled-components';
import {
  BG_COLOR,
  COLOR_PRIMARY,
  COLOR_BLACK
} from 'Styles/colors';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    background-color: ${BG_COLOR};
    color: ${COLOR_BLACK};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    color: ${COLOR_PRIMARY};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  figcaption,
  body {
    margin: 0;
    padding: 0;
  }

  p {
    line-height: 1.8;
  }
`;

export default GlobalStyles;