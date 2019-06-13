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
        <path d="M56.07,139.76v.5q0,38.76,29,38.75,15.25,0,34.75-7.5l5.75,9q-21.24,21.75-51.5,21.75-20.74,0-39-14A49.41,49.41,0,0,1,20.45,170a57.81,57.81,0,0,1-5.63-25.75q0-29,18.75-46.37T79.32,80.51q18,0,31.5,10,15.51,11.25,15.5,39a39,39,0,0,1-5,10.25ZM76.32,99q-15.75,0-19.5,27.25l19.5-1.5,11.25-.5Q87.33,99,76.32,99Z" />
        <path d="M156.57,72q0-24,13.88-37.87t36.37-13.88a48.22,48.22,0,0,1,16.75,3.25,54,54,0,0,1,14.75,8,119.18,119.18,0,0,1-5.25,28,49.8,49.8,0,0,1-13-1.5,60.61,60.61,0,0,0,.25-6.37,16.74,16.74,0,0,0-2.87-8.75q-2.88-4.62-9.38-4.63-12.75,0-12.75,19.5V84a255.92,255.92,0,0,0,29.75-2.5q0,12.51-2.5,20.25H195.32v78.5a81.18,81.18,0,0,0,21.5,4.5v5a56.23,56.23,0,0,1-1,9.25H139.57v-5.87a31.6,31.6,0,0,1,1.25-8.38q7.76-1.24,11.75-4.37t4-10.38V103.26a86.93,86.93,0,0,0-14-1,50.09,50.09,0,0,1-.25-5.5,35.87,35.87,0,0,1,.75-7,55.59,55.59,0,0,1,13.5-5Z" />
        <path d="M330.82,80.51q1.24,4.26,1.25,13.75a104.15,104.15,0,0,1-2.75,22q-38.25,0-42.25,26v38a75.8,75.8,0,0,0,21.5,4.5v5a57.36,57.36,0,0,1-1,9.25H231.32v-5.87a31.2,31.2,0,0,1,1.25-8.38q7.74-1.24,11.75-4.37t4-10.38v-64.5a62.25,62.25,0,0,0-8.13-.5c-2.91,0-5.79.09-8.62.25a52,52,0,0,1,2.25-13.75,173.44,173.44,0,0,1,49.75-9.75,245.13,245.13,0,0,1,3.5,35,63.44,63.44,0,0,1,17.62-26.12Q316.32,80.52,330.82,80.51Z" />
        <path d="M376.82,139.76v.5q0,38.76,29,38.75,15.24,0,34.75-7.5l5.75,9q-21.26,21.75-51.5,21.75-20.76,0-39-14A49.43,49.43,0,0,1,341.19,170a57.8,57.8,0,0,1-5.62-25.75q0-29,18.75-46.37t45.75-17.38q18,0,31.5,10,15.49,11.25,15.5,39a39.3,39.3,0,0,1-5,10.25ZM397.07,99q-15.75,0-19.5,27.25l19.5-1.5,11.25-.5Q408.06,99,397.07,99Z" />
        <path d="M530.07,184.76v5a57.36,57.36,0,0,1-1,9.25H460.32v-5.87a31.2,31.2,0,0,1,1.25-8.38q7.74-1.24,11.75-4.37t4-10.38V105.26a62.36,62.36,0,0,0-8.13-.5c-2.92,0-5.79.09-8.62.25a55.39,55.39,0,0,1,2.25-14q24.24-8.25,53.25-9.5V182.26A36.12,36.12,0,0,0,530.07,184.76ZM518.32,49.89a21.35,21.35,0,0,1-6.25,15.5,20.71,20.71,0,0,1-15.38,6.37,21.48,21.48,0,0,1-15.62-6.37,20.88,20.88,0,0,1-6.5-15.5,20.88,20.88,0,0,1,6.5-15.5A21.49,21.49,0,0,1,496.69,28a20.72,20.72,0,0,1,15.38,6.38A21.35,21.35,0,0,1,518.32,49.89Z" />
        <path d="M593.81,201.76q-15.49,0-24.87-9.37t-9.38-27.63v-61.5a107.67,107.67,0,0,0-15.5-1,52.71,52.71,0,0,1-.25-5.5,35.87,35.87,0,0,1,.75-7,88.6,88.6,0,0,1,14.75-5l31-39.75,8,2.25V84a254.44,254.44,0,0,0,29.5-2.5q0,12.51-2.5,20.25h-27l.25,62.25q0,7,2.38,9.75c1.58,1.84,4.5,2.75,8.75,2.75s9.29-2,15.12-6l6.75,8.5Q615.32,201.77,593.81,201.76Z" />
        <path d="M751.69,198.26q-6.37,4-15.88,4a40.42,40.42,0,0,1-17.62-3.87q-8.13-3.87-11.13-10.63-11.49,14.51-28.87,14.5t-27-9.12q-9.63-9.12-9.63-23.38,0-26,35-33L705.81,131v-7.5q0-16.24-19-16.25a91,91,0,0,0-28.75,5l-8-11.75q22.26-20,52.75-20,20.76,0,31.13,11t10.37,31.25V167q0,12.26,7.75,12.25,1.26,0,9.25-1.5l3.5,8.5A58.19,58.19,0,0,1,751.69,198.26Zm-68.88-31.75a13.21,13.21,0,0,0,2.88,8.88q2.87,3.38,9,3.37t11.12-6v-27.5l-7,2.25Q682.82,152.52,682.81,166.51Z" />
        <path d="M808.06,184.76q7.5,0,12.13-3.62a11.5,11.5,0,0,0,4.62-9.5q0-5.88-7.75-11.75a94.19,94.19,0,0,0-17.12-10.25,52.71,52.71,0,0,1-17.13-13.13,29.59,29.59,0,0,1-7.75-20.25q0-17.74,12.63-26.75t35.37-9a100.1,100.1,0,0,1,30.75,5.25v12a181.3,181.3,0,0,1-1.5,21,57.15,57.15,0,0,1-12.25-1.25,35.3,35.3,0,0,0,.5-5.75q0-15.49-16.25-15.5a14.85,14.85,0,0,0-9.62,3.13q-3.88,3.12-3.88,9.25t8.13,11.5a98.89,98.89,0,0,0,17.75,9.25,48.38,48.38,0,0,1,17.75,12.87A31.34,31.34,0,0,1,862.56,164q0,16.5-14.62,27.38t-36.88,10.87q-22.24,0-38.25-4.75-.25-5.25-.25-13.87T773.81,162a110.83,110.83,0,0,1,13,1v4.5a21.66,21.66,0,0,0,1.88,8.25,12,12,0,0,0,6.12,6.5A32.9,32.9,0,0,0,808.06,184.76Z" />
        <path d="M1007.56,120v62q10.25,2.76,16.75,2.75v5.13a42.8,42.8,0,0,1-1.25,9.12H955.31a46,46,0,0,1-.25-5.5,38.76,38.76,0,0,1,1.25-8.75q6.5-1.24,9.5-4.25t3-10.5V125q0-9.75-4.5-14.62a15.26,15.26,0,0,0-11.75-4.88q-14.5,0-22.5,22.5v54.25a36.12,36.12,0,0,0,14,2.5v5a57.36,57.36,0,0,1-1,9.25H874.31v-5.87a31.2,31.2,0,0,1,1.25-8.38q7.74-1.24,11.75-4.37t4-10.38v-64.5a62.25,62.25,0,0,0-8.13-.5c-2.91,0-5.79.09-8.62.25a52,52,0,0,1,2.25-13.75,173.44,173.44,0,0,1,49.75-9.75,210.62,210.62,0,0,1,3,22.5q12-23.74,39.25-23.75,17.49,0,28.12,10.5T1007.56,120Z" />
      </g>
      {showSubtitle && (
        <g
          id="subtitle"
          name="subtitle"
          style={{
            fill: subtitleColor
          }}
        >
          <path d="M935.24,219.82a3.17,3.17,0,0,1,1.09-.19,1.87,1.87,0,0,1,.84.17.55.55,0,0,1,.34.5,1.22,1.22,0,0,1-.29.67,37.19,37.19,0,0,0-4.43,7.6,64.09,64.09,0,0,0-3.09,9,1.43,1.43,0,0,1-.8.88,2.79,2.79,0,0,1-1.37.37,1.47,1.47,0,0,1-.85-.23.82.82,0,0,1-.37-.7q-.28-3-.74-8.67-2.77,5.51-4.28,9a1.47,1.47,0,0,1-.79.88,2.65,2.65,0,0,1-1.33.37,1.53,1.53,0,0,1-.76-.19c-.32-.11-.48-.29-.48-.55a1,1,0,0,1,.06-.28q-.36-3.94-.86-11.88l-.32-4.7a1.17,1.17,0,0,1,.7-1.06,2.94,2.94,0,0,1,1.57-.44,1.44,1.44,0,0,1,.8.2.78.78,0,0,1,.35.63l.7,10.65q1.89-3.9,4.2-8a1.22,1.22,0,0,1,.76-1,3,3,0,0,1,1.51-.42,1.18,1.18,0,0,1,.89.29.55.55,0,0,1,.23.48l0,.06.54,6.21a37.25,37.25,0,0,1,5.32-9.22A1.82,1.82,0,0,1,935.24,219.82Z" />
          <path d="M945,220.24c2,0,3.9,1.37,5.57,4.12a.55.55,0,0,1,.09.32,1,1,0,0,1-.45.74,2.51,2.51,0,0,1-.89.61q-3.21,1.41-8.9,3.36a17.64,17.64,0,0,0-.32,3.36c0,.53,0,.92,0,1.15a6.52,6.52,0,0,0,.58,2.5,2.77,2.77,0,0,0,.46.67,2.63,2.63,0,0,0,.47.41.52.52,0,0,0,.32.07,1.56,1.56,0,0,0,.53-.13,6.37,6.37,0,0,0,.68-.35,10.73,10.73,0,0,0,1.73-1.25c.53-.47,1.17-1.08,1.92-1.82a2.08,2.08,0,0,1,1.51-.45,2.55,2.55,0,0,1,1,.17.56.56,0,0,1,.4.5,1,1,0,0,1-.32.64,28.23,28.23,0,0,1-4.06,3.65,7.11,7.11,0,0,1-4.16,1.5,4.22,4.22,0,0,1-1.86-.42,4.07,4.07,0,0,1-2.08-2.14,8.53,8.53,0,0,1-.64-3.45,18.19,18.19,0,0,1,.39-3.46l-.26.06-.26.1a2.45,2.45,0,0,1-.76.16,1,1,0,0,1-.71-.23.71.71,0,0,1-.25-.57,1.29,1.29,0,0,1,.33-.82,2.49,2.49,0,0,1,1-.65l1.57-.61c.19-.6.48-1.38.86-2.34a12.74,12.74,0,0,1,2.24-3.42,6.16,6.16,0,0,1,3.17-1.86A4.73,4.73,0,0,1,945,220.24Zm-3.87,6.43c2.09-.79,4-1.45,5.66-2a5.89,5.89,0,0,0-2.14-2,1.56,1.56,0,0,0-.44-.13l-.24,0s0,0,0,.06a.31.31,0,0,1-.15,0A8.71,8.71,0,0,0,941.13,226.67Z" />
          <path d="M958.66,223a8.2,8.2,0,0,1,5.07,1.49,4.77,4.77,0,0,1,1.81,4.46,8.51,8.51,0,0,1-3.66,6.21,39.76,39.76,0,0,1-8.37,4.86l-.26,1.44a1.65,1.65,0,0,1-.92,1.12,3.33,3.33,0,0,1-1.64.45,1.31,1.31,0,0,1-.84-.24.65.65,0,0,1-.21-.72c.08-.56.16-1,.22-1.25a.79.79,0,0,1-.38-.61,1.15,1.15,0,0,1,.29-.7l.28-.38.13-.1q1.47-8.58,2.18-12.86a.69.69,0,0,1-.42-.61,1.21,1.21,0,0,1,.64-.93q.84-5.19,1.41-9.63a1.49,1.49,0,0,1,.9-1,3.29,3.29,0,0,1,1.6-.43,1.25,1.25,0,0,1,.78.2.63.63,0,0,1,.21.63l-1.35,8.89A13.62,13.62,0,0,1,958.66,223Zm3.62,6.27a3.37,3.37,0,0,0-1.46-2.86,5.67,5.67,0,0,0-3.47-1.08,6.37,6.37,0,0,0-1.57.2c-.08.57-.16,1-.22,1.4q-.87,5.76-1.63,10.44c.78-.39,1.69-.89,2.72-1.51a32.63,32.63,0,0,0,3.36-2.32,6.14,6.14,0,0,0,1.92-2.51A4.92,4.92,0,0,0,962.28,229.26Z" />
          <path d="M986.5,214a3.15,3.15,0,0,1,1.57-.43c.66,0,1,.25,1,.74a208.47,208.47,0,0,1-2.31,21.79c.35.17.52.39.52.67s-.26.63-.77.93l-.19,1.18a1.64,1.64,0,0,1-.91,1,3.24,3.24,0,0,1-1.56.44,1.3,1.3,0,0,1-.77-.21.57.57,0,0,1-.19-.63.57.57,0,0,1,0-.22,11.67,11.67,0,0,1-3.39.64,5.44,5.44,0,0,1-2.65-.64,3.74,3.74,0,0,1-1.73-1.76,6,6,0,0,1-.55-2.59,11.75,11.75,0,0,1,.13-1.41,14.11,14.11,0,0,1,1.92-5,12.84,12.84,0,0,1,3.71-3.94,9,9,0,0,1,4.84-1.63q.38-4.38.54-8A1.32,1.32,0,0,1,986.5,214Zm-6,23.54a7.67,7.67,0,0,0,2.85-.74c.69-3.94,1.22-7.83,1.6-11.64h-.06a4.88,4.88,0,0,0-3.17,1.18,9.71,9.71,0,0,0-2.38,2.94,13.08,13.08,0,0,0-1.3,3.49,7.75,7.75,0,0,0-.16,1.57,3.25,3.25,0,0,0,1.06,2.72A2.42,2.42,0,0,0,980.48,237.58Z" />
          <path d="M998.53,220.24q3.08,0,5.57,4.12a.49.49,0,0,1,.1.32,1,1,0,0,1-.45.74,2.65,2.65,0,0,1-.9.61q-3.2,1.41-8.89,3.36a16.87,16.87,0,0,0-.32,3.36c0,.53,0,.92,0,1.15a6.35,6.35,0,0,0,.57,2.5,2.82,2.82,0,0,0,.47.67,2.67,2.67,0,0,0,.46.41.54.54,0,0,0,.32.07,1.51,1.51,0,0,0,.53-.13,7.53,7.53,0,0,0,.69-.35,11.19,11.19,0,0,0,1.73-1.25c.53-.47,1.17-1.08,1.92-1.82a2.07,2.07,0,0,1,1.5-.45,2.61,2.61,0,0,1,1,.17.57.57,0,0,1,.4.5,1,1,0,0,1-.32.64,28.28,28.28,0,0,1-4.07,3.65,7.06,7.06,0,0,1-4.16,1.5,4.15,4.15,0,0,1-1.85-.42,4,4,0,0,1-2.08-2.14,8.53,8.53,0,0,1-.64-3.45,18.09,18.09,0,0,1,.38-3.46l-.26.06-.25.1a2.5,2.5,0,0,1-.77.16,1,1,0,0,1-.7-.23.72.72,0,0,1-.26-.57,1.25,1.25,0,0,1,.34-.82,2.42,2.42,0,0,1,1-.65l1.56-.61c.2-.6.48-1.38.87-2.34a12.28,12.28,0,0,1,2.24-3.42,6.12,6.12,0,0,1,3.17-1.86A4.7,4.7,0,0,1,998.53,220.24Zm-3.87,6.43q3.14-1.18,5.66-2a5.81,5.81,0,0,0-2.14-2,1.5,1.5,0,0,0-.43-.13l-.24,0s0,0,0,.06a.25.25,0,0,1-.14,0A8.72,8.72,0,0,0,994.66,226.67Z" />
          <path d="M1017,219.83a4,4,0,0,1,1.3-.24,1.78,1.78,0,0,1,.72.13.44.44,0,0,1,.27.42.88.88,0,0,1-.16.48,66.35,66.35,0,0,0-4.4,8.69,50.46,50.46,0,0,0-2.73,8.91,1.83,1.83,0,0,1-.91,1.1,3,3,0,0,1-1.56.5,1,1,0,0,1-1.09-.67,38.52,38.52,0,0,1-1.71-7.32c-.33-2.48-.63-5.7-.91-9.64l0-.67a1.43,1.43,0,0,1,.85-1.25,3.21,3.21,0,0,1,1.74-.55c.55,0,.84.2.87.58s.06.92.06,1.22v.09a87,87,0,0,0,1,9.92,41.34,41.34,0,0,1,5.76-11.13A1.9,1.9,0,0,1,1017,219.83Z" />
          <path d="M1019.52,239.82v-.26a.88.88,0,0,1,.23-.51,2.13,2.13,0,0,1,.29-.61,2.08,2.08,0,0,1,1-.67,5.65,5.65,0,0,1,.83-.16,1.41,1.41,0,0,1,.74.19.71.71,0,0,1,.35.58V239l.16.19a.73.73,0,0,1,.16.45c0,.32-.23.64-.67,1a2.46,2.46,0,0,1-1.38.45,1.7,1.7,0,0,1-.67-.13,1.21,1.21,0,0,1-.56-.36,1.23,1.23,0,0,1-.31-.57Z" />
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