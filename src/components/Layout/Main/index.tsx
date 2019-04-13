import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { shadow1 } from 'Styles/shadows';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  content: ReactNode;
}

const LayoutMainStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 15px;
  box-shadow: ${shadow1};
  /* overflow because of the border-radius */
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.bg};

  ${bk2`
    border-radius: 0;
  `}
`;

export default function LayoutMain({
  content
}: Props) {
  return (
    <LayoutMainStyled>
      {content}
    </LayoutMainStyled>
  );
}