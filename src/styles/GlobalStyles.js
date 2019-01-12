import { createGlobalStyle } from 'styled-components';
import {
  BG_COLOR,
  COLOR_PRIMARY
} from 'Styles/colors';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${BG_COLOR};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    color: ${COLOR_PRIMARY};
  }
`;

export default GlobalStyles;