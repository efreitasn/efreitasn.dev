import { DefaultTheme } from 'styled-components';

export const firstRenderTheme: DefaultTheme = {
  transitions: {}
};

export const subsequentRendersTheme: DefaultTheme = {
  transitions: {
    bgBorder: 'background-color .5s ease, border .5s ease'
  }
};