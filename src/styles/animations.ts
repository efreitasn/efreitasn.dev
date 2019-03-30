import { keyframes } from 'styled-components';
import { shadow1 } from 'Styles/shadows';

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

export const headerLogoAnimation = keyframes`
  from {
    transform: translateY(-200%);
  }

  to {
    transform: translateY(0);
  }
`;

export const contentWrapperAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    box-shadow: ${shadow1};
    transform: translateY(0);
  }
`;