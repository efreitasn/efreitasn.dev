import { css } from 'styled-components';

export const layoutFooterIconMixin = css`
  fill: currentColor;
  height: 1.8rem;
  transition: transform .2s ease;
  width: 1.8rem;

  &:hover {
    transform: scale(1.2);
  }
`;