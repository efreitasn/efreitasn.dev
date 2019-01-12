import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from 'Styles/GlobalStyles';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';

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
          href: 'https://fonts.googleapis.com/css?family=Halant:700|Sedgwick+Ave|Roboto:400,700'
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