import { createGlobalStyle } from 'styled-components';
import {
  COLOR_GREY_1,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_DARK_1,
  COLOR_DARK_2,
  COLOR_GREY_3,
  COLOR_GREY_2,
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT
} from 'Styles/colors';
import { bk2 } from './breakpoints';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
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

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-bodyBg);
    color: var(--color-bodyText);
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    ${({ theme }) => theme.transitions.bgBorder ? `transition: ${theme.transitions.bgBorder};` : ''};

    ${bk2`
      font-size: 1.8rem;
    `}
  }

  body.dark {
    --color-bodyBg: ${COLOR_DARK_1};
    --color-bodyText: ${COLOR_WHITE};
    --color-link: ${COLOR_PRIMARY_LIGHT};
    --color-mainBg: ${COLOR_DARK_2};
    --color-otherText: ${COLOR_GREY_2};
  }

  body.light {
    --color-bodyBg: ${COLOR_GREY_1};
    --color-bodyText: ${COLOR_BLACK};
    --color-link: ${COLOR_PRIMARY};
    --color-mainBg: ${COLOR_WHITE};
    --color-otherText: ${COLOR_GREY_3};
  }

  a {
    color: var(--color-link);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .gatsby-highlight pre[class*="language-"] {
    border: 0;
    border-radius: 0;
    box-shadow: unset;
    padding: 2rem 4rem;
  }

  .gatsby-highlight-code-line {
    background-color: rgba(0, 0, 0, 0.2);
    display: block;
    margin: 0 -4rem;
    padding: 0 4rem;
  }
`;

export default GlobalStyles;