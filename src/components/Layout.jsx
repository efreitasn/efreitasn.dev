import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import 'normalize.css/normalize.css';

const LayoutWrapperStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  overflow-x: hidden;

  ${bk1`
    width: 75%;
  `}

  ${bk2`
    width: 100%;
  `}
`;

const Layout = ({ children }) => (
  <>
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:400,700'
        }
      ]}
    />
    <GlobalStyles />
    <LayoutWrapperStyled>
      {children}
    </LayoutWrapperStyled>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;