// SVGs from Iconic
import React from 'react';
import styled from 'styled-components';

interface Props {
  dark: boolean;
}

const DarkModeMoonStyled = styled.svg`
  fill: ${({ theme }) => theme.colors.otherText};
  height: 2rem;
  width: 2rem;
`;

export default function DarkModeMoon({
  dark
}: Props) {
  return (
    <DarkModeMoonStyled
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {dark ? (
        <path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z" />
      ) : (
        <path d="M5.895 9.148c0.848 8.959 8 16.109 16.957 16.953-1.91 1.211-4.152 1.898-6.5 1.898-6.813 0.001-12.352-5.538-12.352-12.353 0-2.347 0.688-4.587 1.895-6.498zM11.844 0c-6.824 1.969-11.844 8.189-11.844 15.646 0 9.034 7.32 16.354 16.352 16.354 7.457 0 13.68-5.023 15.648-11.844-2.18 1.258-4.672 2.031-7.367 2.031-8.188 0-14.82-6.639-14.82-14.822-0.001-2.695 0.773-5.187 2.031-7.365v0z" />
      )}
    </DarkModeMoonStyled>
  );
}