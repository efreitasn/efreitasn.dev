import { css } from 'styled-components';

export const layoutFooterIconMixin = css`
  fill: currentColor;
  height: 2rem;
  transition: transform .2s ease;
  width: 2rem;

  &:hover {
    transform: scale(1.2);
  }
`;