import { createGlobalStyle } from 'styled-components';
import { BG_COLOR } from 'Styles/colors';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${BG_COLOR};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;