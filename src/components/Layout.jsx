import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import { COLOR_GREY_3 } from 'Styles/colors';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import {
  shadow1
} from 'Styles/shadows';
import Link from 'Components/Link';

const LayoutWrapperStyled = styled.div`
  width: 50%;
  margin: 4rem auto;

  ${bk1`
    width: 75%;
  `}

  ${bk2`
    width: 100%;
  `}
`;

const LayoutHeader = styled.header`
  margin: 0 auto .5rem auto;
  width: 70%;
`;

const LayoutMainWrapper = styled.div`
  background-color: #FFFFFF;
  /* border-radius: 15px; */
  box-shadow: ${shadow1};
  /* overflow because of the border-radius */
  overflow-x: hidden;
`;

const LayoutFooter = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding: 0 1.5rem;
`;

const LayoutFooterBy = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: ${COLOR_GREY_3};
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapperStyled>
      <LayoutHeader>
        <Link to="/">
          <Logo />
        </Link>
      </LayoutHeader>
      <LayoutMainWrapper>
        <main>
          {children}
        </main>
      </LayoutMainWrapper>
      <LayoutFooter>
        <LayoutFooterBy>By</LayoutFooterBy>
        <Link to="/about">Emanuel</Link>
      </LayoutFooter>
    </LayoutWrapperStyled>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;