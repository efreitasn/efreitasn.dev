import React from 'react';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import Link from 'Components/Link';

const LayoutHeaderStyled = styled.header`
  margin: 0 auto .5rem auto;
  width: 70%;
`;

export default function LayoutHeader() {
  return (
    <LayoutHeaderStyled>
      <Link to="/">
        <Logo />
      </Link>
    </LayoutHeaderStyled>
  );
}