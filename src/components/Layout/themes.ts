import { DefaultTheme } from 'styled-components';

export const firstRenderTheme: DefaultTheme = {
  transitions: {}
};

export const subsequentRendersTheme: DefaultTheme = {
  transitions: {
    bg: 'background-color .5s ease'
  }
};