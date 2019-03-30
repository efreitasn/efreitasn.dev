import { css } from 'styled-components';

// 700px
export const bk1 = (...args: TemplateStringsArray) => css`
  @media (max-width: 43.75em) {
    ${args}
  }
`;

// 450px
export const bk2 = (...args: TemplateStringsArray) => css`
  @media (max-width: 28.125em) {
    ${args}
  }
`;