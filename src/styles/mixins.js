import { css } from 'styled-components';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK
} from 'Styles/colors';
import {
  bk2
} from 'Styles/breakpoints';

export const homeSocialIconMixin = css`
  fill: ${COLOR_PRIMARY_DARK};
  height: 2.5rem;
  width: auto;

  ${bk2`
    height: 3rem;
  `}

  &:hover {
    fill: ${COLOR_PRIMARY};
  }
`;