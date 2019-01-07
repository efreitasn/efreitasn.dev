import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK
} from 'Styles/colors';

export const homeSocialIconMixin = `
  fill: ${COLOR_PRIMARY_DARK};
  height: 2.5rem;
  width: 2.5rem;

  &:hover {
    fill: ${COLOR_PRIMARY};
  }
`;