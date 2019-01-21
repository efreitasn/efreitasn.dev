import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  colorSubtitle,
  colorTitle,
  showSubtitle
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 1009.49 ${showSubtitle ? '234.5' : '200'}`}
    strokeDashoffset={1000}
    style={{
      width: '100%',
      height: 'auto'
    }}
  >
    <title>efreitasn</title>
    <g id="title" name="title" style={{
      fill: colorTitle
    }}>
      <path d="M41.25,119.5v.5q0,38.76,29,38.75,15.24,0,34.75-7.5l5.75,9Q89.5,182,59.25,182q-20.76,0-39-14A49.41,49.41,0,0,1,5.63,149.75,57.81,57.81,0,0,1,0,124Q0,95,18.75,77.63T64.5,60.25q18,0,31.5,10,15.5,11.25,15.5,39a39.3,39.3,0,0,1-5,10.25ZM61.5,78.75Q45.75,78.75,42,106l19.5-1.5,11.25-.5Q72.5,78.76,61.5,78.75Z" />
      <path d="M141.75,51.75q0-24,13.87-37.87T192,0a48.27,48.27,0,0,1,16.75,3.25,54,54,0,0,1,14.75,8,119.18,119.18,0,0,1-5.25,28,49.74,49.74,0,0,1-13-1.5,63.5,63.5,0,0,0,.25-6.37,16.67,16.67,0,0,0-2.88-8.75Q199.76,18,193.25,18,180.5,18,180.5,37.5V63.75a255.92,255.92,0,0,0,29.75-2.5q0,12.51-2.5,20.25H180.5V160a81.18,81.18,0,0,0,21.5,4.5v5a57.36,57.36,0,0,1-1,9.25H124.75v-5.87A31.14,31.14,0,0,1,126,164.5q7.74-1.25,11.75-4.37c2.66-2.09,4-5.54,4-10.38V83a86.93,86.93,0,0,0-14-1,50.09,50.09,0,0,1-.25-5.5,35.87,35.87,0,0,1,.75-7,55.59,55.59,0,0,1,13.5-5Z" />
      <path d="M316,60.25q1.25,4.26,1.25,13.75a104.15,104.15,0,0,1-2.75,22q-38.25,0-42.25,26v38a75.8,75.8,0,0,0,21.5,4.5v5a57.36,57.36,0,0,1-1,9.25H216.5v-5.87a31.14,31.14,0,0,1,1.25-8.38q7.74-1.25,11.75-4.37c2.66-2.09,4-5.54,4-10.38V85.25a62.36,62.36,0,0,0-8.13-.5c-2.92,0-5.79.09-8.62.25A52,52,0,0,1,219,71.25a173.44,173.44,0,0,1,49.75-9.75,245.13,245.13,0,0,1,3.5,35,63.44,63.44,0,0,1,17.62-26.12Q301.5,60.26,316,60.25Z" />
      <path d="M362,119.5v.5q0,38.76,29,38.75,15.25,0,34.75-7.5l5.75,9Q410.25,182,380,182q-20.75,0-39-14a49.41,49.41,0,0,1-14.62-18.25A57.81,57.81,0,0,1,320.74,124q0-29,18.75-46.37t45.75-17.38q18,0,31.5,10,15.51,11.25,15.5,39a39,39,0,0,1-5,10.25Zm20.25-40.75q-15.75,0-19.5,27.25l19.5-1.5,11.25-.5Q393.25,78.76,382.24,78.75Z" />
      <path d="M515.24,164.5v5a56.23,56.23,0,0,1-1,9.25H445.49v-5.87a31.54,31.54,0,0,1,1.25-8.38q7.75-1.25,11.75-4.37c2.67-2.09,4-5.54,4-10.38V85a62.21,62.21,0,0,0-8.12-.5c-2.92,0-5.8.09-8.63.25a55.39,55.39,0,0,1,2.25-14q24.25-8.25,53.25-9.5V162A36.15,36.15,0,0,0,515.24,164.5ZM503.49,29.63a21.31,21.31,0,0,1-6.25,15.5,20.68,20.68,0,0,1-15.37,6.37,21.51,21.51,0,0,1-15.63-6.37,20.91,20.91,0,0,1-6.5-15.5,20.9,20.9,0,0,1,6.5-15.5,21.51,21.51,0,0,1,15.63-6.38,20.69,20.69,0,0,1,15.37,6.38A21.29,21.29,0,0,1,503.49,29.63Z" />
      <path d="M579,181.5q-15.51,0-24.87-9.37t-9.38-27.63V83a107.77,107.77,0,0,0-15.5-1,50.09,50.09,0,0,1-.25-5.5,35.87,35.87,0,0,1,.75-7,88.28,88.28,0,0,1,14.75-5l31-39.75,8,2.25V63.75a254.63,254.63,0,0,0,29.5-2.5q0,12.51-2.5,20.25h-27l.25,62.25q0,7,2.38,9.75c1.58,1.84,4.5,2.75,8.75,2.75s9.28-2,15.12-6l6.75,8.5Q600.48,181.51,579,181.5Z" />
      <path d="M736.86,178q-6.37,4-15.87,4a40.47,40.47,0,0,1-17.63-3.87q-8.11-3.88-11.12-10.63Q680.74,182,663.36,182t-27-9.12q-9.61-9.13-9.62-23.38,0-26,35-33L691,110.75v-7.5Q691,87,672,87a90.92,90.92,0,0,0-28.75,5l-8-11.75q22.25-20,52.75-20,20.75,0,31.12,11t10.38,31.25v44.25q0,12.25,7.75,12.25,1.25,0,9.25-1.5L750,166A58.21,58.21,0,0,1,736.86,178ZM668,146.25a13.26,13.26,0,0,0,2.87,8.88q2.88,3.38,9,3.37c4.09,0,7.79-2,11.13-6V125l-7,2.25Q668,132.26,668,146.25Z" />
      <path d="M793.24,164.5q7.5,0,12.12-3.62a11.52,11.52,0,0,0,4.63-9.5q0-5.88-7.75-11.75a93.71,93.71,0,0,0-17.13-10.25A52.57,52.57,0,0,1,768,116.25,29.59,29.59,0,0,1,760.24,96q0-17.75,12.62-26.75t35.38-9A100.2,100.2,0,0,1,839,65.5v12a181.3,181.3,0,0,1-1.5,21,57.08,57.08,0,0,1-12.25-1.25,35.3,35.3,0,0,0,.5-5.75q0-15.5-16.25-15.5a14.8,14.8,0,0,0-9.63,3.13Q796,82.25,796,88.38t8.12,11.5a99.88,99.88,0,0,0,17.75,9.25A48.3,48.3,0,0,1,839.61,122a31.3,31.3,0,0,1,8.13,21.75q0,16.5-14.63,27.38T796.24,182Q774,182,758,177.25q-.25-5.25-.25-13.87T759,141.75a111,111,0,0,1,13,1v4.5a21.63,21.63,0,0,0,1.87,8.25A12,12,0,0,0,780,162,32.9,32.9,0,0,0,793.24,164.5Z" />
      <path d="M992.74,99.75v62q10.25,2.76,16.75,2.75v5.13a42.88,42.88,0,0,1-1.25,9.12H940.49a46,46,0,0,1-.25-5.5,38.76,38.76,0,0,1,1.25-8.75q6.5-1.25,9.5-4.25t3-10.5v-45q0-9.75-4.5-14.62a15.26,15.26,0,0,0-11.75-4.88q-14.5,0-22.5,22.5V162a36.12,36.12,0,0,0,14,2.5v5a57.36,57.36,0,0,1-1,9.25H859.49v-5.87a31.14,31.14,0,0,1,1.25-8.38q7.74-1.25,11.75-4.37c2.66-2.09,4-5.54,4-10.38V85.25a62.36,62.36,0,0,0-8.13-.5c-2.92,0-5.79.09-8.62.25A52,52,0,0,1,862,71.25a173.44,173.44,0,0,1,49.75-9.75,210.62,210.62,0,0,1,3,22.5q12-23.74,39.25-23.75,17.49,0,28.12,10.5T992.74,99.75Z" />
    </g>
    {showSubtitle && (
      <g id="subtitle" name="subtitle" style={{
        fill: colorSubtitle
      }}>
        <path d="M744,202a11.41,11.41,0,0,1,2.51,3.68,10.35,10.35,0,0,1,.92,4.17,8.36,8.36,0,0,1-.29,2.18,12.68,12.68,0,0,1-1.84,4,9.4,9.4,0,0,1-2.95,2.75,7.11,7.11,0,0,1-3.66,1,7.79,7.79,0,0,1-1.25-.1c-.85,5.47-1.62,9.92-2.3,13.38a1.58,1.58,0,0,1-.9,1,3.21,3.21,0,0,1-1.56.42,1.39,1.39,0,0,1-.85-.22.6.6,0,0,1-.21-.68q1.56-7.93,2.75-15.13l-.06,0a.82.82,0,0,1-.42-.64c0-.37.26-.71.77-1q1-5.91,2.3-15.2l-.41,0-.36,0a1.35,1.35,0,0,1-.8-.2.56.56,0,0,1-.25-.48,1.27,1.27,0,0,1,.48-.92,2.31,2.31,0,0,1,1.18-.58,7.55,7.55,0,0,1,1.15-.1c.28,0,.66,0,1.12.07.69-.09,1.14,0,1.35.35A9.25,9.25,0,0,1,744,202Zm.29,8.11a8,8,0,0,0-1.92-5,11.24,11.24,0,0,0-2.3-2.28c-.64,4-1.14,7.22-1.51,9.67-.17,1-.4,2.51-.7,4.51a4.2,4.2,0,0,0,1.76.45A3.15,3.15,0,0,0,742,216.2a9.17,9.17,0,0,0,1.34-2.21,10.76,10.76,0,0,0,.77-2.56A5.37,5.37,0,0,0,744.26,210.15Z" />
        <path d="M753.4,206.6a5.79,5.79,0,0,0,1.52,1.56,25.68,25.68,0,0,0,2.43,1.51,20.28,20.28,0,0,1,3.18,2.14,4.54,4.54,0,0,1,1.46,2.4,6.15,6.15,0,0,1,.13.93,3.34,3.34,0,0,1-2.37,3.22,14,14,0,0,1-5.38,1,11.65,11.65,0,0,1-2.08-.16,8.63,8.63,0,0,1-2.19-.75,6.16,6.16,0,0,1-1.89-1.38,2.46,2.46,0,0,1-.75-1.68c0-.89.69-1.71,2.08-2.46a2.52,2.52,0,0,1,1.12-.29,1.52,1.52,0,0,1,.85.23.65.65,0,0,1,.33.54c0,.38-.31.76-.92,1.12a.31.31,0,0,0-.2.29c0,.25.21.56.61.93a6.35,6.35,0,0,0,1,.73,7.44,7.44,0,0,0,3.07.67,6.22,6.22,0,0,0,.9,0,3.84,3.84,0,0,0,1.86-.39,1.29,1.29,0,0,0,.6-1.41c-.08-.91-1-2-2.78-3.1l-1.22-.77c-1.11-.68-2-1.28-2.73-1.81a7.82,7.82,0,0,1-1.84-1.88,4.28,4.28,0,0,1-.77-2.48,5,5,0,0,1,.32-1.73,5.79,5.79,0,0,1,2.62-3.22,8,8,0,0,1,4.13-1.13,6.24,6.24,0,0,1,3.83,1.15,3.83,3.83,0,0,1,1.55,3.26,6.34,6.34,0,0,1-.19,1.44,1.59,1.59,0,0,1-1,1,3.52,3.52,0,0,1-1.57.42,1.07,1.07,0,0,1-.69-.19.44.44,0,0,1-.11-.55,4.72,4.72,0,0,0,.19-1.34,2.73,2.73,0,0,0-2.14-2.82,4.7,4.7,0,0,0-.87-.12,2.57,2.57,0,0,0-1.93.81,3,3,0,0,0-.79,2.16A3.75,3.75,0,0,0,753.4,206.6Z" />
        <path d="M773,200c2.05,0,3.9,1.38,5.57,4.13a.55.55,0,0,1,.09.32,1.06,1.06,0,0,1-.45.74,2.49,2.49,0,0,1-.89.6q-3.21,1.41-8.9,3.36a17.72,17.72,0,0,0-.32,3.36c0,.54,0,.92,0,1.16a6.43,6.43,0,0,0,.58,2.49,3,3,0,0,0,.93,1.09.62.62,0,0,0,.32.06,1.52,1.52,0,0,0,.53-.12,6.63,6.63,0,0,0,.68-.36,10.67,10.67,0,0,0,1.73-1.24q.8-.7,1.92-1.83a2.08,2.08,0,0,1,1.51-.45,2.37,2.37,0,0,1,1,.18c.27.12.4.28.4.5a1,1,0,0,1-.32.64,27.55,27.55,0,0,1-4.06,3.64,7.06,7.06,0,0,1-4.16,1.51,4.22,4.22,0,0,1-1.86-.42,4.1,4.1,0,0,1-2.08-2.14,8.72,8.72,0,0,1-.64-3.46,18.18,18.18,0,0,1,.39-3.45l-.26.06-.26.1a2.79,2.79,0,0,1-.76.16,1,1,0,0,1-.71-.23.72.72,0,0,1-.25-.57,1.29,1.29,0,0,1,.33-.82,2.4,2.4,0,0,1,1-.66l1.57-.6c.19-.6.48-1.38.86-2.34a12.74,12.74,0,0,1,2.24-3.42,6.16,6.16,0,0,1,3.17-1.86A4.72,4.72,0,0,1,773,200Zm-3.87,6.43c2.09-.79,4-1.45,5.66-2a5.89,5.89,0,0,0-2.14-2,1.56,1.56,0,0,0-.44-.13l-.24,0s0,0,0,.06l-.15,0A8.68,8.68,0,0,0,769.16,206.4Z" />
        <path d="M794,200.88a3.76,3.76,0,0,1,1.55-.43c.64,0,.92.3.83.9a1.21,1.21,0,0,1,0,.29,2.13,2.13,0,0,1-.06.28V202q-.32,2.14-.72,5.13c-.27,2-.48,3.56-.62,4.69l-.84,6.15a1.52,1.52,0,0,1-.91,1.08,3.36,3.36,0,0,1-1.65.45,1.32,1.32,0,0,1-.81-.22.63.63,0,0,1-.24-.64c.23-1.84.61-4.59,1.12-8.26l-.32.55c-.56.93-1,1.62-1.25,2a20,20,0,0,1-3.06,3.78,8.11,8.11,0,0,1-3.69,2,6.2,6.2,0,0,1-1.44.19q-3,0-3-4.1a18.05,18.05,0,0,1,.61-4.36,43.83,43.83,0,0,1,1.39-4.6,30.73,30.73,0,0,1,1.36-3.26,1.85,1.85,0,0,1,1-.78,3.75,3.75,0,0,1,1.52-.34,1.37,1.37,0,0,1,.72.16.51.51,0,0,1,.27.45,1.11,1.11,0,0,1-.1.38,34.88,34.88,0,0,0-2.78,8.55l-.16.86a12.12,12.12,0,0,0-.26,2.05,2.16,2.16,0,0,0,0,.51c.25,1.09.67,1.6,1.24,1.54a1.51,1.51,0,0,0,.85-.61c.33-.39.54-.62.63-.71a27.69,27.69,0,0,0,2.84-4q1.29-2.16,3-5.42c.58-1.18,1.21-2.38,1.89-3.62A2.57,2.57,0,0,1,794,200.88Z" />
        <path d="M807.68,193.78a3.15,3.15,0,0,1,1.57-.43c.66,0,1,.24,1,.73a211.3,211.3,0,0,1-2.3,21.8.76.76,0,0,1,.51.67c0,.32-.26.63-.77.93l-.19,1.18a1.64,1.64,0,0,1-.91,1,3.19,3.19,0,0,1-1.55.43,1.28,1.28,0,0,1-.77-.21.53.53,0,0,1-.19-.62.54.54,0,0,1,0-.22,12.14,12.14,0,0,1-3.39.64,5.56,5.56,0,0,1-2.66-.64,3.78,3.78,0,0,1-1.73-1.76,6.08,6.08,0,0,1-.54-2.6,9.74,9.74,0,0,1,.13-1.4,13.79,13.79,0,0,1,1.92-5,12.69,12.69,0,0,1,3.71-3.93,8.88,8.88,0,0,1,4.83-1.63c.26-2.93.44-5.58.54-8C806.9,194.4,807.17,194.07,807.68,193.78Zm-6,23.54a7.77,7.77,0,0,0,2.85-.74q1-5.93,1.59-11.65h-.06a4.89,4.89,0,0,0-3.17,1.19,9.71,9.71,0,0,0-2.38,2.94,13,13,0,0,0-1.3,3.49,8.45,8.45,0,0,0-.16,1.57,3.29,3.29,0,0,0,1.06,2.72A2.45,2.45,0,0,0,801.67,217.32Z" />
        <path d="M825.33,205.09A6.92,6.92,0,0,1,826,208a9.06,9.06,0,0,1-1.27,4.48,15.8,15.8,0,0,1-2.53,3.24,17,17,0,0,1-3.7,2.86,7.8,7.8,0,0,1-3.89,1.17,4.78,4.78,0,0,1-2.17-.51,4.43,4.43,0,0,1-2.18-4.26,13.93,13.93,0,0,1,1-4.85,26.31,26.31,0,0,1,2.11-4.46q2.73-4.32,5.73-5.44a5,5,0,0,1,1.8-.32,3.13,3.13,0,0,1,1.88.56,2.32,2.32,0,0,1,.9,1.74v.13a1.13,1.13,0,0,1-.06.29A7.82,7.82,0,0,1,825.33,205.09Zm-6.64-2a12.12,12.12,0,0,0-2,2.2,17.61,17.61,0,0,0-2,3.94,15.85,15.85,0,0,0-.61,2.35,14.83,14.83,0,0,0-.29,2.77,5.1,5.1,0,0,0,.37,2.1,1.25,1.25,0,0,0,1.2.78,3.16,3.16,0,0,0,1.57-.54,14,14,0,0,0,4.1-3.59,7.58,7.58,0,0,0,1.63-4.67Q822.66,205,818.69,203.08Z" />
        <path d="M840,207.65a.54.54,0,0,1,.17.42,1,1,0,0,1-.12.45,1.68,1.68,0,0,1-.8.72,2.28,2.28,0,0,1-1.09.24c-1.3,0-3.34-.13-6.11-.26l-2-.1a.78.78,0,0,1-.49-.19.48.48,0,0,1-.18-.38.88.88,0,0,1,.16-.48,1.68,1.68,0,0,1,.8-.69,2.6,2.6,0,0,1,1.09-.27c3.58.13,6.27.24,8.06.35A.88.88,0,0,1,840,207.65Z" />
        <path d="M856.24,192.77a9.92,9.92,0,0,1,.66,3.94c0,.19,0,1.12-.1,2.78,0,.56-.06.93-.06,1.12a1.35,1.35,0,0,1-.79,1.09,3,3,0,0,1-1.55.45c-.74,0-1.12-.3-1.12-.9,0-.34,0-.89.07-1.66s.09-1.48.09-2.21a14,14,0,0,0-.13-2c0-.17-.09-.36-.16-.57s-.1-.38-.12-.48l0-.13-.25.86c-.47,1.62-.83,2.94-1.09,3.94a26.73,26.73,0,0,0-.61,3.2q-.19,1.24-.27,2.13c0,.58-.1,1.29-.14,2.12,1.55-.17,3-.28,4.22-.35.68,0,1,.16,1,.55a1.44,1.44,0,0,1-.52,1,2.14,2.14,0,0,1-1.11.63c-1.28.23-2.54.42-3.77.57l-.16,3.65c-.17,3.56-.26,5.56-.26,6a1.42,1.42,0,0,1-.85,1.12,3.2,3.2,0,0,1-1.65.48,1.44,1.44,0,0,1-.8-.2.7.7,0,0,1-.31-.63q0-2.71.31-8l.1-2-3.65.35a1.3,1.3,0,0,1-.81-.1.52.52,0,0,1-.28-.48,1.54,1.54,0,0,1,.53-1,1.85,1.85,0,0,1,1.14-.61l3.2-.42c.13-1.85.28-3.36.46-4.52s.49-2.65.91-4.47a25.37,25.37,0,0,1,1.06-3.25,6.64,6.64,0,0,1,1.66-2.38,4,4,0,0,1,2.76-1A2.41,2.41,0,0,1,856.24,192.77Z" />
        <path d="M866.82,199.27a2,2,0,0,1,1.34.43,1.73,1.73,0,0,1,.51,1.39,8,8,0,0,1-.28,2c-.2.72-.46,1.58-.8,2.56l-.45,1.34a1.85,1.85,0,0,1-1,1,3.45,3.45,0,0,1-1.54.41,1.07,1.07,0,0,1-.72-.21.53.53,0,0,1-.11-.62c.38-1.19.77-2.52,1.15-4,.09-.66.15-1.1.19-1.31l-.13.13a24.17,24.17,0,0,0-4.51,5.31A74.89,74.89,0,0,0,859.33,218a1.38,1.38,0,0,1-.82,1.07,3.11,3.11,0,0,1-1.61.46,1.35,1.35,0,0,1-.8-.22.69.69,0,0,1-.29-.67,80.49,80.49,0,0,1,1-9,.64.64,0,0,1-.32-.51.82.82,0,0,1,.13-.42l.48-.8c.47-2.45,1-4.92,1.73-7.39a1.73,1.73,0,0,1,1-1,3.5,3.5,0,0,1,1.61-.43,1.21,1.21,0,0,1,.74.19.48.48,0,0,1,.13.58c-.35,1.19-.56,2-.64,2.36a12.13,12.13,0,0,1,3.45-2.59A4.62,4.62,0,0,1,866.82,199.27Z" />
        <path d="M881.14,205.09a7.07,7.07,0,0,1,.62,2.91,9,9,0,0,1-1.28,4.48,15.45,15.45,0,0,1-2.53,3.24,17,17,0,0,1-3.69,2.86,7.83,7.83,0,0,1-3.89,1.17,4.85,4.85,0,0,1-2.18-.51Q866,218.05,866,215a13.93,13.93,0,0,1,1-4.85,25.57,25.57,0,0,1,2.11-4.46q2.73-4.32,5.73-5.44a5,5,0,0,1,1.79-.32,3.14,3.14,0,0,1,1.89.56,2.36,2.36,0,0,1,.9,1.74v.13a1.28,1.28,0,0,1-.07.29A7.85,7.85,0,0,1,881.14,205.09Zm-6.64-2a12.52,12.52,0,0,0-2,2.2,17.59,17.59,0,0,0-2,3.94,17.43,17.43,0,0,0-.9,5.12,4.94,4.94,0,0,0,.37,2.1,1.24,1.24,0,0,0,1.2.78,3.16,3.16,0,0,0,1.57-.54,13.79,13.79,0,0,0,4.09-3.59,7.53,7.53,0,0,0,1.64-4.67C878.47,206.16,877.14,204.38,874.5,203.08Z" />
        <path d="M896.23,203a12.61,12.61,0,0,1-.16,1.84c-.11.68-.23,1.31-.36,1.91l-.22,1.28-1.34,10a.65.65,0,0,1,.54.8,2.89,2.89,0,0,1-2.5,2.24l-.32,0a2,2,0,0,1-1-.22.66.66,0,0,1-.35-.71q1.35-9.72,2-14.59c0-.08.06-.33.14-.73a6.87,6.87,0,0,0,.11-1.16q0-1-.54-1.05c-.28,0-.73.33-1.36,1.13l-1,1.33a35.46,35.46,0,0,0-3.59,4.87q-.76,4.66-1.21,7.55l-.16,1a1.59,1.59,0,0,1-.9,1.06,3.16,3.16,0,0,1-1.57.45,1.19,1.19,0,0,1-.75-.21.63.63,0,0,1-.21-.63q.84-4.89,1.32-8a.59.59,0,0,1-.2-.44.89.89,0,0,1,.1-.36c.06-.1.12-.2.18-.28l.14-.23,1.28-7.74a1.43,1.43,0,0,1,.86-1,3.22,3.22,0,0,1,1.54-.42,1.21,1.21,0,0,1,.74.19.56.56,0,0,1,.19.58c-.11.7-.26,1.61-.45,2.72l1.34-1.44a20.74,20.74,0,0,1,2.56-2.21,4.21,4.21,0,0,1,2.47-.86,2.73,2.73,0,0,1,1.41.35C895.8,200.54,896.23,201.53,896.23,203Z" />
        <path d="M910,212.13a4,4,0,0,1,1-.13c.79,0,1.19.21,1.19.61a1,1,0,0,1-.32.64c-.26.3-.49.58-.71.85l-.57.72a26.39,26.39,0,0,1-2.53,2.9,6.76,6.76,0,0,1-2.62,1.55,4.92,4.92,0,0,1-1.51.22,3.44,3.44,0,0,1-2.28-.77,3.19,3.19,0,0,1-1.11-2.24,9.73,9.73,0,0,1-.06-1.28,16,16,0,0,1,.38-3.39c.26-1.15.63-2.59,1.12-4.32l.39-1.37-1.22.12c-.6,0-1.41.13-2.43.26a1.65,1.65,0,0,1-1.12-.16.77.77,0,0,1-.39-.67,1.37,1.37,0,0,1,.47-.95,1.84,1.84,0,0,1,1.2-.52l4.12-.48q1.41-5.19,3.17-10.18a1.54,1.54,0,0,1,.88-.78,3.23,3.23,0,0,1,1.4-.34,1.29,1.29,0,0,1,.68.16.54.54,0,0,1,.28.48,2.27,2.27,0,0,1-.07.35q-1.86,5.22-3.1,10c1.49-.14,2.48-.22,3-.22s.93.18.93.54a1.46,1.46,0,0,1-.54,1,2.49,2.49,0,0,1-1.12.66c-1.28.21-2.24.36-2.88.44-.37,1.46-.69,2.87-1,4.26-.05.17-.19.79-.45,1.87a12.94,12.94,0,0,0-.38,3q0,1.82,1,2a1.77,1.77,0,0,0,1.39-.69,28.14,28.14,0,0,0,2-2.35,16.18,16.18,0,0,1,1.15-1.38A1.74,1.74,0,0,1,910,212.13Z" />
        <path d="M926.77,207.65a.54.54,0,0,1,.17.42,1,1,0,0,1-.12.45,1.68,1.68,0,0,1-.8.72,2.28,2.28,0,0,1-1.09.24c-1.3,0-3.34-.13-6.11-.26l-2-.1a.78.78,0,0,1-.49-.19.48.48,0,0,1-.18-.38.88.88,0,0,1,.16-.48,1.68,1.68,0,0,1,.8-.69,2.6,2.6,0,0,1,1.09-.27c3.58.13,6.27.24,8.06.35A.88.88,0,0,1,926.77,207.65Z" />
        <path d="M941.82,200q3.07,0,5.57,4.13a.49.49,0,0,1,.1.32,1.06,1.06,0,0,1-.45.74,2.49,2.49,0,0,1-.89.6q-3.21,1.41-8.9,3.36a16.94,16.94,0,0,0-.32,3.36c0,.54,0,.92,0,1.16a6.09,6.09,0,0,0,.58,2.49,2.23,2.23,0,0,0,.46.67,2.44,2.44,0,0,0,.46.42.67.67,0,0,0,.32.06,1.47,1.47,0,0,0,.53-.12,6.69,6.69,0,0,0,.69-.36,11.13,11.13,0,0,0,1.73-1.24q.79-.7,1.92-1.83a2.07,2.07,0,0,1,1.5-.45,2.38,2.38,0,0,1,1,.18c.27.12.4.28.4.5a1,1,0,0,1-.32.64,27.55,27.55,0,0,1-4.06,3.64,7.06,7.06,0,0,1-4.17,1.51,4.15,4.15,0,0,1-1.85-.42,4.1,4.1,0,0,1-2.08-2.14,8.55,8.55,0,0,1-.64-3.46,18.93,18.93,0,0,1,.38-3.45l-.25.06-.26.1a2.84,2.84,0,0,1-.77.16,1,1,0,0,1-.7-.23.73.73,0,0,1-.26-.57,1.3,1.3,0,0,1,.34-.82,2.34,2.34,0,0,1,1-.66l1.56-.6c.2-.6.48-1.38.87-2.34a12.51,12.51,0,0,1,2.24-3.42,6.12,6.12,0,0,1,3.17-1.86A4.7,4.7,0,0,1,941.82,200ZM938,206.4q3.13-1.18,5.67-2a5.9,5.9,0,0,0-2.15-2,1.5,1.5,0,0,0-.43-.13l-.24,0s0,0,0,.06l-.14,0A8.76,8.76,0,0,0,938,206.4Z" />
        <path d="M962.05,203a11.36,11.36,0,0,1-.16,1.84c-.11.68-.23,1.31-.35,1.91l-.23,1.28L960,218a.63.63,0,0,1,.54.8,2.88,2.88,0,0,1-2.49,2.24l-.32,0a2,2,0,0,1-1-.22.65.65,0,0,1-.36-.71q1.35-9.72,2-14.59c0-.08.07-.33.14-.73a6,6,0,0,0,.11-1.16q0-1-.54-1.05c-.28,0-.73.33-1.36,1.13l-1,1.33A35.42,35.42,0,0,0,952.1,210c-.52,3.11-.92,5.63-1.22,7.55l-.16,1a1.54,1.54,0,0,1-.9,1.06,3.15,3.15,0,0,1-1.56.45,1.25,1.25,0,0,1-.76-.21.6.6,0,0,1-.2-.63q.83-4.89,1.31-8a.58.58,0,0,1-.19-.44.87.87,0,0,1,.09-.36l.18-.28.14-.23,1.28-7.74a1.45,1.45,0,0,1,.87-1,3.15,3.15,0,0,1,1.53-.42,1.21,1.21,0,0,1,.74.19.56.56,0,0,1,.19.58c-.11.7-.25,1.61-.45,2.72l1.35-1.44a20,20,0,0,1,2.56-2.21,4.18,4.18,0,0,1,2.46-.86,2.73,2.73,0,0,1,1.41.35C961.62,200.54,962.05,201.53,962.05,203Z" />
        <path d="M974.34,193.78a3.12,3.12,0,0,1,1.56-.43c.67,0,1,.24,1,.73a211.3,211.3,0,0,1-2.3,21.8.76.76,0,0,1,.51.67c0,.32-.25.63-.77.93l-.19,1.18a1.61,1.61,0,0,1-.91,1,3.16,3.16,0,0,1-1.55.43,1.28,1.28,0,0,1-.77-.21.53.53,0,0,1-.19-.62.54.54,0,0,1,0-.22,12.14,12.14,0,0,1-3.39.64,5.59,5.59,0,0,1-2.66-.64,3.83,3.83,0,0,1-1.73-1.76,6.08,6.08,0,0,1-.54-2.6,9.74,9.74,0,0,1,.13-1.4,14.16,14.16,0,0,1,1.92-5,12.8,12.8,0,0,1,3.71-3.93,8.88,8.88,0,0,1,4.83-1.63c.26-2.93.44-5.58.55-8C973.56,194.4,973.82,194.07,974.34,193.78Zm-6,23.54a7.67,7.67,0,0,0,2.85-.74q1-5.93,1.6-11.65h-.07a4.86,4.86,0,0,0-3.16,1.19,9.74,9.74,0,0,0-2.39,2.94,12.59,12.59,0,0,0-1.29,3.49,7.68,7.68,0,0,0-.16,1.57,3.28,3.28,0,0,0,1,2.72A2.47,2.47,0,0,0,968.32,217.32Z" />
        <path d="M986.37,200c2,0,3.9,1.38,5.57,4.13a.55.55,0,0,1,.09.32,1.06,1.06,0,0,1-.45.74,2.49,2.49,0,0,1-.89.6q-3.21,1.41-8.9,3.36a17.72,17.72,0,0,0-.32,3.36c0,.54,0,.92,0,1.16a6.43,6.43,0,0,0,.58,2.49,3,3,0,0,0,.93,1.09.62.62,0,0,0,.32.06,1.52,1.52,0,0,0,.53-.12,6.63,6.63,0,0,0,.68-.36,10.67,10.67,0,0,0,1.73-1.24c.54-.47,1.17-1.08,1.92-1.83a2.08,2.08,0,0,1,1.51-.45,2.33,2.33,0,0,1,1,.18c.27.12.4.28.4.5a1,1,0,0,1-.32.64,27.55,27.55,0,0,1-4.06,3.64,7,7,0,0,1-4.16,1.51,4.22,4.22,0,0,1-1.86-.42,4.1,4.1,0,0,1-2.08-2.14,8.72,8.72,0,0,1-.64-3.46,18.18,18.18,0,0,1,.39-3.45l-.26.06-.26.1a2.79,2.79,0,0,1-.76.16,1,1,0,0,1-.71-.23.72.72,0,0,1-.25-.57,1.29,1.29,0,0,1,.33-.82,2.4,2.4,0,0,1,1-.66l1.57-.6c.19-.6.48-1.38.86-2.34a12.74,12.74,0,0,1,2.24-3.42,6.16,6.16,0,0,1,3.17-1.86A4.72,4.72,0,0,1,986.37,200Zm-3.87,6.43c2.09-.79,4-1.45,5.66-2a5.89,5.89,0,0,0-2.14-2,1.56,1.56,0,0,0-.44-.13l-.24,0s0,0,0,.06l-.15,0A8.68,8.68,0,0,0,982.5,206.4Z" />
        <path d="M1002.94,199.27a2,2,0,0,1,1.35.43,1.73,1.73,0,0,1,.51,1.39,8.06,8.06,0,0,1-.29,2c-.19.72-.46,1.58-.8,2.56l-.45,1.34a1.79,1.79,0,0,1-1,1,3.38,3.38,0,0,1-1.53.41,1.07,1.07,0,0,1-.72-.21.55.55,0,0,1-.12-.62c.39-1.19.77-2.52,1.16-4,.08-.66.14-1.1.19-1.31l-.13.13a23.9,23.9,0,0,0-4.51,5.31A73.35,73.35,0,0,0,995.46,218a1.41,1.41,0,0,1-.82,1.07,3.11,3.11,0,0,1-1.62.46,1.37,1.37,0,0,1-.8-.22.68.68,0,0,1-.28-.67,80.49,80.49,0,0,1,1-9,.62.62,0,0,1-.32-.51.82.82,0,0,1,.13-.42l.48-.8c.47-2.45,1-4.92,1.72-7.39a1.79,1.79,0,0,1,1-1,3.57,3.57,0,0,1,1.62-.43,1.18,1.18,0,0,1,.73.19.47.47,0,0,1,.13.58c-.34,1.19-.55,2-.64,2.36a12,12,0,0,1,3.46-2.59A4.57,4.57,0,0,1,1002.94,199.27Z" />
        <path d="M1004.7,219.56v-.26a.88.88,0,0,1,.23-.51,1.78,1.78,0,0,1,1.28-1.28,4.42,4.42,0,0,1,.83-.16,1.41,1.41,0,0,1,.74.19.71.71,0,0,1,.35.58v.6l.16.2a.68.68,0,0,1,.16.44c0,.32-.23.64-.67,1a2.46,2.46,0,0,1-1.38.45,1.54,1.54,0,0,1-.67-.13,1.19,1.19,0,0,1-.56-.35,1.23,1.23,0,0,1-.31-.57Z" />
      </g>
    )}
  </svg>
);

Logo.defaultProps = {
  showSubtitle: false
};

Logo.propTypes = {
  colorTitle: PropTypes.string.isRequired,
  colorSubtitle: PropTypes.string,
  showSubtitle: PropTypes.bool
};

export default Logo;