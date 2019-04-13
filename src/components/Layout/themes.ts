import { DefaultTheme } from 'styled-components';
import {
  COLOR_GREY_1,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_DARK_1,
  COLOR_DARK_2,
  COLOR_GREY_3,
  COLOR_GREY_2,
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT
} from 'Styles/colors';

const commomTheme = {
  transitions: {
    bg: 'background-color .5s ease'
  }
};

export const lightTheme: DefaultTheme = {
  colors: {
    bodyBg: COLOR_GREY_1,
    bodyText: COLOR_BLACK,
    link: COLOR_PRIMARY,
    mainBg: COLOR_WHITE,
    otherText: COLOR_GREY_3
  },
  ...commomTheme
};
export const darkTheme: DefaultTheme = {
  colors: {
    bodyBg: COLOR_DARK_1,
    bodyText: COLOR_WHITE,
    link: COLOR_PRIMARY_LIGHT,
    mainBg: COLOR_DARK_2,
    otherText: COLOR_GREY_2
  },
  ...commomTheme
};