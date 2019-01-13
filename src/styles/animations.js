import { keyframes } from 'styled-components';

export const iconLinksGroupItemAnimation = keyframes`
  from {
    transform: translateX(400px);
  }

  to {
    transform: translateX(0);
  }
`;

export const iconLinksListItemAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const homeLogoAnimation = keyframes`
  from {
    transform: translateY(-200%);
  }

  to {
    transform: translateY(0);
  }
`;