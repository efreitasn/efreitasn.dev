import { createGlobalStyle } from 'styled-components';

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
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.bodyText};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    transition: ${({ theme }) => theme.transitions.bg}
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.8;
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