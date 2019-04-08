import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY
} from 'Styles/colors';

interface Props {
  titleColor: string;
  subtitleColor: string;
  showSubtitle: boolean;
}

const LogoStyled = styled.svg`
  height: auto;
  width: 100%;
`;

function Logo ({
  titleColor,
  subtitleColor,
  showSubtitle
}: Props) {
  return (
    <LogoStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 1023.2 ${showSubtitle ? '260' : '227'}`}
      strokeDashoffset={1000}
    >
      <title>efreitasn</title>
      <g
        id="title"
        name="title"
        style={{
          fill: titleColor
        }}
      >
        <path d="m47.3 141.4v0.5c0 25.8 9.7 38.8 29 38.8 10.2 0 21.8-2.5 34.8-7.5l5.8 9c-14.2 14.5-31.3 21.8-51.5 21.8-13.8 0-26.8-4.7-39-14-6-4.5-10.9-10.6-14.6-18.3-3.9-7.7-5.8-16.3-5.8-25.8 0-19.3 6.3-34.8 18.8-46.4s27.8-17.4 45.8-17.4c12 0 22.5 3.3 31.5 10 10.3 7.5 15.5 20.5 15.5 39-1.3 4-3 7.4-5 10.3h-65.3zm20.2-40.8c-10.5 0-17 9.1-19.5 27.3l19.5-1.5 11.3-0.5c-0.2-16.9-4-25.3-11.3-25.3z" />
        <path d="m147.7 73.6c0-16 4.6-28.6 13.9-37.9s21.4-13.8 36.4-13.8c5.3 0 10.9 1.1 16.8 3.3 5.8 2.2 10.8 4.8 14.8 8-0.5 8.8-2.3 18.2-5.3 28-5 0-9.3-0.5-13-1.5 0.2-1.5 0.3-3.6 0.3-6.4s-1-5.7-2.9-8.8-5-4.6-9.4-4.6c-8.5 0-12.8 6.5-12.8 19.5v26.3c10.8-0.3 20.8-1.2 29.8-2.5 0 8.3-0.8 15.1-2.5 20.3h-27.3v78.5c6.3 2.3 13.5 3.8 21.5 4.5v5c0 2.3-0.3 5.4-1 9.3h-76.3v-5.9c0-2.6 0.4-5.4 1.3-8.4 5.2-0.8 9.1-2.3 11.8-4.4s4-5.5 4-10.4v-66.8c-4-0.7-8.7-1-14-1-0.2-1.5-0.3-3.3-0.3-5.5s0.3-4.5 0.8-7c4.5-2.3 9-4 13.5-5v-12.8z" />
        <path d="m322 82.1c0.8 2.8 1.3 7.4 1.3 13.8 0 6.3-0.9 13.7-2.8 22-25.5 0-39.6 8.7-42.3 26v38c6 2.3 13.2 3.8 21.5 4.5v5c0 2.3-0.3 5.4-1 9.3h-76.3v-5.9c0-2.6 0.4-5.4 1.3-8.4 5.2-0.8 9.1-2.3 11.8-4.4s4-5.5 4-10.4v-64.5c-2.5-0.3-5.2-0.5-8.1-0.5s-5.8 0.1-8.6 0.3c0.3-5.8 1.1-10.4 2.3-13.8 15.2-5.5 31.8-8.8 49.8-9.8 2 11.5 3.2 23.2 3.5 35 4-10.7 9.9-19.4 17.6-26.1s16.3-10.1 26-10.1z" />
        <path d="m368 141.4v0.5c0 25.8 9.7 38.8 29 38.8 10.2 0 21.8-2.5 34.8-7.5l5.8 9c-14.2 14.5-31.3 21.8-51.5 21.8-13.8 0-26.8-4.7-39-14-6-4.5-10.9-10.6-14.6-18.3-3.8-7.7-5.6-16.3-5.6-25.8 0-19.3 6.3-34.8 18.8-46.4s27.8-17.4 45.8-17.4c12 0 22.5 3.3 31.5 10 10.3 7.5 15.5 20.5 15.5 39-1.3 4-3 7.4-5 10.3h-65.5zm20.2-40.8c-10.5 0-17 9.1-19.5 27.3l19.5-1.5 11.3-0.5c-0.2-16.9-3.9-25.3-11.3-25.3z" />
        <path d="m521.2 186.4v5c0 2.3-0.3 5.4-1 9.3h-68.8v-5.9c0-2.6 0.4-5.4 1.3-8.4 5.2-0.8 9.1-2.3 11.8-4.4s4-5.5 4-10.4v-64.8c-2.5-0.3-5.2-0.5-8.1-0.5s-5.8 0.1-8.6 0.3c0.3-5.8 1.1-10.5 2.3-14 16.2-5.5 33.9-8.7 53.3-9.5v100.8c3.8 1.6 8.5 2.5 13.8 2.5zm-11.7-134.9c0 6.1-2.1 11.3-6.3 15.5-4.2 4.3-9.3 6.4-15.4 6.4s-11.3-2.1-15.6-6.4-6.5-9.4-6.5-15.5 2.2-11.3 6.5-15.5c4.3-4.3 9.5-6.4 15.6-6.4s11.2 2.1 15.4 6.4 6.3 9.4 6.3 15.5z" />
        <path d="m585 203.4c-10.3 0-18.6-3.1-24.9-9.4s-9.4-15.5-9.4-27.6v-61.5c-4.5-0.7-9.7-1-15.5-1-0.2-1.5-0.3-3.3-0.3-5.5s0.3-4.5 0.8-7c3.5-1.7 8.4-3.3 14.8-5l31-39.8 8 2.3v36.8c10.7-0.3 20.5-1.2 29.5-2.5 0 8.3-0.8 15.1-2.5 20.3h-27l0.3 62.3c0 4.7 0.8 7.9 2.4 9.8 1.6 1.8 4.5 2.8 8.8 2.8s9.3-2 15.1-6l6.8 8.5c-11 14.9-23.6 22.5-37.9 22.5z" />
        <path d="m742.9 199.9c-4.3 2.7-9.5 4-15.9 4-6.3 0-12.2-1.3-17.6-3.9s-9.1-6.1-11.1-10.6c-7.7 9.7-17.3 14.5-28.9 14.5s-20.6-3-27-9.1-9.6-13.9-9.6-23.4c0-17.3 11.7-28.3 35-33l29.3-5.8v-7.5c0-10.8-6.3-16.3-19-16.3-9.2 0-18.8 1.7-28.8 5l-8-11.8c14.8-13.3 32.4-20 52.8-20 13.8 0 24.2 3.7 31.1 11s10.4 17.8 10.4 31.3v44.3c0 8.2 2.6 12.3 7.8 12.3 0.8 0 3.9-0.5 9.3-1.5l3.5 8.5c-4.7 5.3-9.1 9.3-13.3 12zm-68.9-31.8c0 3.7 1 6.6 2.9 8.9s4.9 3.4 9 3.4 7.8-2 11.1-6v-27.5l-7 2.3c-10.7 3.3-16 9.6-16 18.9z" />
        <path d="m799.2 186.4c5 0 9-1.2 12.1-3.6s4.6-5.6 4.6-9.5-2.6-7.8-7.8-11.8c-5.2-3.9-10.9-7.3-17.1-10.3-6.3-2.9-12-7.3-17.1-13.1-5.2-5.8-7.8-12.6-7.8-20.3 0-11.8 4.2-20.8 12.6-26.8s20.2-9 35.4-9c9.7 0 19.9 1.8 30.8 5.3v12c0 5.7-0.5 12.7-1.5 21-4.3 0-8.4-0.4-12.3-1.3 0.3-2 0.5-3.9 0.5-5.8 0-10.3-5.4-15.5-16.3-15.5-3.8 0-7 1-9.6 3.1s-3.9 5.2-3.9 9.3 2.7 7.9 8.1 11.5 11.3 6.7 17.8 9.3c6.4 2.6 12.3 6.9 17.8 12.9 5.4 6 8.1 13.3 8.1 21.8 0 11-4.9 20.1-14.6 27.4s-22 10.9-36.9 10.9c-14.8 0-27.6-1.6-38.3-4.8-0.2-3.5-0.3-8.1-0.3-13.9s0.4-13 1.3-21.6c3.3 0 7.7 0.3 13 1v4.5s0.6 5.3 1.9 8.3 3.3 5.2 6.1 6.5c4 1.6 8.4 2.5 13.4 2.5z" />
        <path d="m998.7 121.6v62c6.8 1.8 12.4 2.8 16.8 2.8v5.1c0 2.4-0.4 5.5-1.3 9.1h-67.8c-0.2-1.3-0.3-3.2-0.3-5.5s0.4-5.3 1.3-8.8c4.3-0.8 7.5-2.3 9.5-4.3s3-5.5 3-10.5v-45c0-6.5-1.5-11.4-4.5-14.6s-6.9-4.9-11.8-4.9c-9.7 0-17.2 7.5-22.5 22.5v54.3c4 1.7 8.7 2.5 14 2.5v5c0 2.3-0.3 5.4-1 9.3h-68.8v-5.9c0-2.6 0.4-5.4 1.3-8.4 5.2-0.8 9.1-2.3 11.8-4.4s4-5.5 4-10.4v-64.5c-2.5-0.3-5.2-0.5-8.1-0.5s-5.8 0.1-8.6 0.3c0.3-5.8 1.1-10.4 2.3-13.8 15.2-5.5 31.8-8.8 49.8-9.8 1.5 8.2 2.5 15.7 3 22.5 8-15.8 21.1-23.8 39.3-23.8 11.7 0 21 3.5 28.1 10.5 7 7.2 10.5 16.9 10.5 29.2z" />
      </g>
      {showSubtitle && (
        <g
          id="subtitle"
          name="subtitle"
          style={{
            fill: subtitleColor
          }}
        >
          <path d="m844.1 214.6c0.4 1 0.7 2.3 0.7 3.9 0 0.2 0 1.1-0.1 2.8 0 0.6-0.1 0.9-0.1 1.1 0 0.4-0.3 0.8-0.8 1.1s-1 0.4-1.6 0.4c-0.7 0-1.1-0.3-1.1-0.9 0-0.3 0-0.9 0.1-1.7 0.1-0.7 0.1-1.5 0.1-2.2 0-0.8 0-1.5-0.1-2 0-0.2-0.1-0.4-0.2-0.6s-0.1-0.4-0.1-0.5v-0.1l-0.3 0.9c-0.5 1.6-0.8 2.9-1.1 3.9s-0.5 2.1-0.6 3.2c-0.1 0.8-0.2 1.5-0.3 2.1s-0.1 1.3-0.1 2.1c1.6-0.2 3-0.3 4.2-0.4 0.7 0 1 0.2 1 0.5s-0.2 0.6-0.5 1c-0.4 0.4-0.7 0.6-1.1 0.6-1.3 0.2-2.5 0.4-3.8 0.6l-0.2 3.6c-0.2 3.6-0.3 5.6-0.3 6s-0.3 0.8-0.8 1.1-1.1 0.5-1.6 0.5c-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.3-0.3-0.6c0-1.8 0.1-4.5 0.3-8l0.1-2-3.6 0.4c-0.4 0-0.6 0-0.8-0.1s-0.3-0.3-0.3-0.5c0-0.3 0.2-0.7 0.5-1 0.4-0.4 0.7-0.6 1.1-0.6l3.2-0.4c0.1-1.9 0.3-3.4 0.5-4.5 0.2-1.2 0.5-2.7 0.9-4.5 0.3-1.2 0.7-2.3 1.1-3.2s0.9-1.7 1.7-2.4c0.7-0.7 1.6-1 2.8-1 1.1 0.1 1.9 0.6 2.3 1.6z" />
          <path d="m854.7 221.1c0.6 0 1 0.1 1.3 0.4s0.5 0.8 0.5 1.4-0.1 1.3-0.3 2-0.5 1.6-0.8 2.6l-0.4 1.3c-0.1 0.4-0.5 0.7-1 1s-1 0.4-1.5 0.4c-0.3 0-0.6-0.1-0.7-0.2-0.2-0.1-0.2-0.3-0.1-0.6 0.4-1.2 0.8-2.5 1.2-4 0.1-0.7 0.1-1.1 0.2-1.3l-0.1 0.1c-1.6 1.4-3.1 3.2-4.5 5.3-0.6 3.4-1 6.8-1.2 10.2 0 0.4-0.3 0.8-0.8 1.1s-1.1 0.5-1.6 0.5c-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.4-0.3-0.7c0.2-3.1 0.5-6.1 1-9-0.2-0.1-0.3-0.3-0.3-0.5 0-0.1 0-0.3 0.1-0.4l0.5-0.8c0.5-2.5 1-4.9 1.7-7.4 0.1-0.4 0.4-0.7 1-1s1.1-0.4 1.6-0.4c0.3 0 0.6 0.1 0.7 0.2 0.2 0.1 0.2 0.3 0.1 0.6-0.3 1.2-0.6 2-0.6 2.4 1.3-1.3 2.4-2.1 3.5-2.6 0.5-0.2 1.1-0.4 1.6-0.4z" />
          <path d="m869 227c0.4 0.9 0.6 1.9 0.6 2.9 0 1.5-0.4 3-1.3 4.5-0.6 1-1.4 2.1-2.5 3.2s-2.3 2.1-3.7 2.9-2.7 1.2-3.9 1.2c-0.8 0-1.5-0.2-2.2-0.5-1.5-0.8-2.2-2.2-2.2-4.3 0-1.5 0.3-3.1 1-4.8 0.7-1.8 1.4-3.2 2.1-4.5 1.8-2.9 3.7-4.7 5.7-5.4 0.6-0.2 1.2-0.3 1.8-0.3 0.7 0 1.4 0.2 1.9 0.6s0.8 1 0.9 1.7v0.1c0 0.1 0 0.2-0.1 0.3 0.9 0.6 1.5 1.5 1.9 2.4zm-6.6-2c-0.7 0.6-1.3 1.3-2 2.2-0.8 1.2-1.5 2.5-2 3.9-0.2 0.6-0.4 1.4-0.6 2.4s-0.3 1.9-0.3 2.8 0.1 1.6 0.4 2.1c0.2 0.5 0.6 0.8 1.2 0.8 0.4 0 1-0.2 1.6-0.5 1.6-1 3-2.2 4.1-3.6s1.6-3 1.6-4.7c0-2.4-1.4-4.1-4-5.4z" />
          <path d="m884.1 224.9c0 0.6-0.1 1.2-0.2 1.8-0.1 0.7-0.2 1.3-0.4 1.9l-0.2 1.3-1.3 10c0.4 0.1 0.6 0.4 0.5 0.8-0.2 1.2-1.1 1.9-2.5 2.2h-0.3c-0.4 0-0.7-0.1-1-0.2s-0.4-0.4-0.4-0.7c0.9-6.5 1.6-11.3 2-14.6 0-0.1 0.1-0.3 0.1-0.7 0.1-0.4 0.1-0.8 0.1-1.2 0-0.7-0.2-1-0.5-1.1-0.3 0-0.7 0.3-1.4 1.1-0.6 0.8-1 1.2-1 1.3-1.3 1.5-2.5 3.1-3.6 4.9-0.5 3.1-0.9 5.6-1.2 7.6l-0.2 1c-0.1 0.4-0.4 0.8-0.9 1.1s-1.1 0.4-1.6 0.4c-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.3-0.2-0.6c0.6-3.3 1-5.9 1.3-8-0.1-0.1-0.2-0.3-0.2-0.4s0-0.2 0.1-0.4c0.1-0.1 0.1-0.2 0.2-0.3s0.1-0.2 0.1-0.2l1.3-7.7c0.1-0.4 0.4-0.7 0.9-1s1-0.4 1.5-0.4c0.3 0 0.6 0.1 0.7 0.2 0.2 0.1 0.2 0.3 0.2 0.6-0.1 0.7-0.3 1.6-0.4 2.7l1.3-1.4c0.9-0.9 1.7-1.6 2.6-2.2 0.8-0.6 1.6-0.9 2.5-0.9 0.5 0 1 0.1 1.4 0.4 1.1 0.4 1.5 1.4 1.5 2.9z" />
          <path d="m897.9 234c0.3-0.1 0.6-0.1 1-0.1 0.8 0 1.2 0.2 1.2 0.6 0 0.2-0.1 0.4-0.3 0.6-0.3 0.3-0.5 0.6-0.7 0.8-0.2 0.3-0.4 0.5-0.6 0.7-0.9 1.2-1.8 2.2-2.5 2.9s-1.6 1.2-2.6 1.6c-0.5 0.1-1 0.2-1.5 0.2-0.9 0-1.7-0.3-2.3-0.8s-1-1.3-1.1-2.2c0-0.3-0.1-0.7-0.1-1.3 0-1.1 0.1-2.2 0.4-3.4s0.6-2.6 1.1-4.3l0.4-1.4-1.2 0.1c-0.6 0-1.4 0.1-2.4 0.3-0.5 0.1-0.9 0-1.1-0.2s-0.4-0.4-0.4-0.7 0.2-0.6 0.5-0.9 0.7-0.5 1.2-0.5l4.1-0.5c0.9-3.5 2-6.8 3.2-10.2 0.1-0.3 0.4-0.6 0.9-0.8s0.9-0.3 1.4-0.3c0.3 0 0.5 0.1 0.7 0.2s0.3 0.3 0.3 0.5c0 0.1 0 0.2-0.1 0.4-1.2 3.5-2.3 6.8-3.1 10 1.5-0.1 2.5-0.2 3-0.2 0.6 0 0.9 0.2 0.9 0.5s-0.2 0.6-0.5 1c-0.4 0.4-0.7 0.6-1.1 0.7-1.3 0.2-2.2 0.4-2.9 0.4-0.4 1.5-0.7 2.9-1 4.3 0 0.2-0.2 0.8-0.4 1.9-0.3 1.1-0.4 2.1-0.4 3 0 1.2 0.3 1.9 1 2 0.4 0.1 0.9-0.2 1.4-0.7s1.2-1.3 2-2.4c0.5-0.7 0.9-1.1 1.2-1.4-0.2-0.2 0.1-0.3 0.4-0.4z" />
          <path d="m914.7 229.5c0.1 0.1 0.2 0.2 0.2 0.4 0 0.1 0 0.3-0.1 0.4-0.1 0.3-0.4 0.5-0.8 0.7s-0.7 0.3-1.1 0.2c-1.3 0-3.3-0.1-6.1-0.3l-2-0.1c-0.2 0-0.4-0.1-0.5-0.2s-0.2-0.2-0.2-0.4 0.1-0.3 0.2-0.5c0.1-0.3 0.4-0.5 0.8-0.7s0.7-0.3 1.1-0.3c3.6 0.1 6.3 0.2 8.1 0.4 0.1 0.3 0.3 0.3 0.4 0.4z" />
          <path d="m929.7 221.8c2 0 3.9 1.4 5.6 4.1 0.1 0.1 0.1 0.2 0.1 0.3 0 0.2-0.1 0.5-0.4 0.7-0.2 0.3-0.5 0.5-0.9 0.6-2.1 0.9-5.1 2.1-8.9 3.4-0.2 1.1-0.3 2.2-0.3 3.4v1.2c0 1 0.2 1.8 0.6 2.5 0.1 0.2 0.3 0.5 0.5 0.7s0.4 0.4 0.5 0.4 0.2 0.1 0.3 0.1 0.3 0 0.5-0.1 0.4-0.2 0.7-0.4c0.6-0.4 1.2-0.8 1.7-1.2 0.5-0.5 1.2-1.1 1.9-1.8 0.3-0.3 0.8-0.4 1.5-0.4 0.4 0 0.7 0.1 1 0.2s0.4 0.3 0.4 0.5-0.1 0.4-0.3 0.6c-1.3 1.4-2.7 2.6-4.1 3.6s-2.8 1.5-4.2 1.5c-0.7 0-1.3-0.1-1.9-0.4-1-0.4-1.7-1.2-2.1-2.1-0.4-1-0.6-2.1-0.6-3.5 0-1 0.1-2.1 0.4-3.5l-0.3 0.1-0.3 0.1c-0.3 0.1-0.6 0.2-0.8 0.2-0.3 0-0.5-0.1-0.7-0.2s-0.3-0.3-0.3-0.6 0.1-0.5 0.3-0.8 0.6-0.5 1-0.7l1.6-0.6c0.2-0.6 0.5-1.4 0.9-2.3 0.6-1.3 1.3-2.5 2.2-3.4s2-1.6 3.2-1.9c0.5-0.2 0.8-0.3 1.2-0.3zm-3.8 6.5c2.1-0.8 4-1.5 5.7-2-0.7-1-1.4-1.6-2.1-2-0.1-0.1-0.3-0.1-0.4-0.1h-0.2v0.1h-0.1c-1.4 0.8-2.3 2.1-2.9 4z" />
          <path d="m949.9 224.9c0 0.6-0.1 1.2-0.2 1.8-0.1 0.7-0.2 1.3-0.4 1.9l-0.2 1.3-1.3 10c0.4 0.1 0.6 0.4 0.5 0.8-0.2 1.2-1.1 1.9-2.5 2.2h-0.3c-0.4 0-0.7-0.1-1-0.2s-0.4-0.4-0.4-0.7c0.9-6.5 1.6-11.3 2-14.6 0-0.1 0.1-0.3 0.1-0.7 0.1-0.4 0.1-0.8 0.1-1.2 0-0.7-0.2-1-0.5-1.1-0.3 0-0.7 0.3-1.4 1.1-0.6 0.8-1 1.2-1 1.3-1.3 1.5-2.5 3.1-3.6 4.9-0.5 3.1-0.9 5.6-1.2 7.6l-0.2 1c-0.1 0.4-0.4 0.8-0.9 1.1s-1.1 0.4-1.6 0.4c-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.3-0.2-0.6c0.6-3.3 1-5.9 1.3-8-0.1-0.1-0.2-0.3-0.2-0.4s0-0.2 0.1-0.4c0.1-0.1 0.1-0.2 0.2-0.3s0.1-0.2 0.1-0.2l1.3-7.7c0.1-0.4 0.4-0.7 0.9-1s1-0.4 1.5-0.4c0.3 0 0.6 0.1 0.7 0.2 0.2 0.1 0.2 0.3 0.2 0.6-0.1 0.7-0.3 1.6-0.4 2.7l1.3-1.4c0.9-0.9 1.7-1.6 2.6-2.2 0.8-0.6 1.6-0.9 2.5-0.9 0.5 0 1 0.1 1.4 0.4 1.1 0.4 1.5 1.4 1.5 2.9z" />
          <path d="m962.2 215.7c0.5-0.3 1-0.4 1.6-0.4 0.7 0 1 0.2 1 0.7-0.4 7-1.1 14.3-2.3 21.8 0.3 0.2 0.5 0.4 0.5 0.7s-0.3 0.6-0.8 0.9l-0.2 1.2c-0.1 0.4-0.4 0.8-0.9 1-0.5 0.3-1 0.4-1.6 0.4-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.3-0.2-0.6v-0.2c-1.4 0.4-2.5 0.6-3.4 0.6-1 0-1.9-0.2-2.7-0.6s-1.4-1-1.7-1.8c-0.4-0.8-0.5-1.6-0.5-2.6 0-0.3 0-0.8 0.1-1.4 0.3-1.7 0.9-3.4 1.9-5s2.2-2.9 3.7-3.9 3.1-1.6 4.8-1.6c0.3-2.9 0.4-5.6 0.5-8 0.3-0.4 0.5-0.8 1-1zm-6 23.5c0.7 0 1.7-0.2 2.8-0.7 0.7-3.9 1.2-7.8 1.6-11.6h-0.1c-1.2 0-2.2 0.4-3.2 1.2s-1.8 1.8-2.4 2.9c-0.6 1.2-1.1 2.3-1.3 3.5-0.1 0.5-0.2 1.1-0.2 1.6 0 1.3 0.4 2.2 1.1 2.7 0.6 0.2 1.1 0.4 1.7 0.4z" />
          <path d="m985.4 215.7c0.5-0.3 1-0.4 1.6-0.4 0.7 0 1 0.2 1 0.7-0.4 7-1.1 14.3-2.3 21.8 0.3 0.2 0.5 0.4 0.5 0.7s-0.3 0.6-0.8 0.9l-0.2 1.2c-0.1 0.4-0.4 0.8-0.9 1-0.5 0.3-1 0.4-1.6 0.4-0.3 0-0.6-0.1-0.8-0.2s-0.3-0.3-0.2-0.6v-0.2c-1.4 0.4-2.5 0.6-3.4 0.6-1 0-1.9-0.2-2.7-0.6s-1.4-1-1.7-1.8c-0.4-0.8-0.5-1.6-0.5-2.6 0-0.3 0-0.8 0.1-1.4 0.3-1.7 0.9-3.4 1.9-5s2.2-2.9 3.7-3.9 3.1-1.6 4.8-1.6c0.3-2.9 0.4-5.6 0.5-8 0.3-0.4 0.5-0.8 1-1zm-6 23.5c0.7 0 1.7-0.2 2.8-0.7 0.7-3.9 1.2-7.8 1.6-11.6h-0.1c-1.2 0-2.2 0.4-3.2 1.2s-1.8 1.8-2.4 2.9c-0.6 1.2-1.1 2.3-1.3 3.5-0.1 0.5-0.2 1.1-0.2 1.6 0 1.3 0.4 2.2 1.1 2.7 0.6 0.2 1.1 0.4 1.7 0.4z" />
          <path d="m997.5 221.8c2 0 3.9 1.4 5.6 4.1 0.1 0.1 0.1 0.2 0.1 0.3 0 0.2-0.2 0.5-0.4 0.7-0.2 0.3-0.5 0.5-0.9 0.6-2.1 0.9-5.1 2.1-8.9 3.4-0.2 1.1-0.3 2.2-0.3 3.4v1.2c0 1 0.2 1.8 0.6 2.5 0.1 0.2 0.3 0.5 0.5 0.7s0.4 0.4 0.5 0.4 0.2 0.1 0.3 0.1c0.2 0 0.3 0 0.5-0.1s0.4-0.2 0.7-0.4c0.6-0.4 1.2-0.8 1.7-1.2 0.5-0.5 1.2-1.1 1.9-1.8 0.3-0.3 0.8-0.4 1.5-0.4 0.4 0 0.7 0.1 1 0.2s0.4 0.3 0.4 0.5-0.1 0.4-0.3 0.6c-1.3 1.4-2.7 2.6-4.1 3.6s-2.8 1.5-4.2 1.5c-0.7 0-1.3-0.1-1.9-0.4-1-0.4-1.7-1.2-2.1-2.1s-0.6-2.1-0.6-3.5c0-1 0.1-2.1 0.4-3.5l-0.3 0.1-0.3 0.1c-0.3 0.1-0.6 0.2-0.8 0.2-0.3 0-0.5-0.1-0.7-0.2s-0.3-0.3-0.3-0.6 0.1-0.5 0.3-0.8 0.6-0.5 1-0.7l1.6-0.6c0.2-0.6 0.5-1.4 0.9-2.3 0.6-1.3 1.3-2.5 2.2-3.4 0.9-1 2-1.6 3.2-1.9 0.4-0.2 0.8-0.3 1.2-0.3zm-3.9 6.5c2.1-0.8 4-1.5 5.7-2-0.7-1-1.4-1.6-2.1-2-0.1-0.1-0.3-0.1-0.4-0.1h-0.2v0.1h-0.1c-1.3 0.8-2.2 2.1-2.9 4z" />
          <path d="m1016 221.4c0.5-0.2 0.9-0.2 1.3-0.2 0.3 0 0.5 0 0.7 0.1s0.3 0.2 0.3 0.4-0.1 0.3-0.2 0.5c-1.7 2.9-3.2 5.8-4.4 8.7s-2.1 5.8-2.7 8.9c-0.1 0.4-0.4 0.8-0.9 1.1s-1 0.5-1.6 0.5-0.9-0.2-1.1-0.7c-0.8-2.4-1.4-4.8-1.7-7.3s-0.6-5.7-0.9-9.6v-0.7c0-0.5 0.3-0.9 0.8-1.2 0.6-0.4 1.2-0.5 1.7-0.5 0.6 0 0.8 0.2 0.9 0.6 0 0.5 0.1 0.9 0.1 1.2v0.1c0.2 4.1 0.6 7.4 1 9.9 1.5-4.2 3.4-7.9 5.8-11.1 0.1-0.3 0.4-0.5 0.9-0.7z" />
          <path d="m1018.5 241.4v-0.3c0-0.1 0.1-0.3 0.2-0.5l0.3-0.6c0.2-0.3 0.5-0.5 1-0.7 0.3-0.1 0.6-0.1 0.8-0.2 0.3 0 0.5 0.1 0.7 0.2s0.3 0.3 0.4 0.6v0.6l0.2 0.2c0.1 0.1 0.2 0.3 0.2 0.4 0 0.3-0.2 0.6-0.7 1-0.4 0.3-0.9 0.4-1.4 0.4-0.3 0-0.5 0-0.7-0.1s-0.4-0.2-0.6-0.4-0.3-0.4-0.3-0.6c-0.1 0.1-0.1 0-0.1 0z" />
        </g>
      )}
    </LogoStyled>
  );
}

Logo.defaultProps = {
  showSubtitle: true,
  subtitleColor: COLOR_SECONDARY,
  titleColor: COLOR_PRIMARY
};

export default Logo;