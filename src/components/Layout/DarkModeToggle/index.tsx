import React from 'react';
import styled from 'styled-components';
import DarkModeToggleMoon from './Moon';

interface Props {
  toggleIsDark: () => void;
  isDark: boolean;
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
  toggleIsDark,
  isDark
}: Props) {
  return (
    <DarkModeToggleStyled
      onClick={toggleIsDark}
      title={`Dark mode is ${isDark ? 'on' : 'off'}`}
    >
      <DarkModeToggleMoon isDark={isDark} />
    </DarkModeToggleStyled>
  );
}