import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeWrapperStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HomeContentStyled = styled.div`
  display: inline-block;
`;

const HomeWrapper = ({ children }) => (
  <HomeWrapperStyled>
    <HomeContentStyled>
      {children}
    </HomeContentStyled>
  </HomeWrapperStyled>
);

HomeWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeWrapper;