import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'Styles/GlobalStyles';
import 'normalize.css/normalize.css';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <div>
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
