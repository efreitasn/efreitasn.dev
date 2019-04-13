import React from 'react';
import styled from 'styled-components';
import DarkModeToggleMoon from './Moon';

interface Props {
  dark: boolean;
  toggleDark: () => void;
}

const DarkModeToggleStyled = styled.button`
  background: transparent;
  padding: .5rem 1rem;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;

  &:focus {
    opacity: .6;
    outline: none;
  }
`;

export default function DarkModeToggle({
  dark,
  toggleDark
}: Props) {
  return (
    <DarkModeToggleStyled
      onClick={toggleDark}
      title={`Dark mode is ${dark ? 'on' : 'off'}`}
    >
      <DarkModeToggleMoon dark={dark} />
    </DarkModeToggleStyled>
  );
}