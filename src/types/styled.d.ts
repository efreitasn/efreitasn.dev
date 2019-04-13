import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bodyBg: string;
      bodyText: string;
      mainBg: string;
      otherText: string;
      link: string;
    };
    transitions: {
      bg: string;
    };
  }
}