import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeDescriptionStyled = styled.div`
  color: #7ad1e6;
  font-family: 'Sedgwick Ave', cursive;
  position: relative;
  text-align: right;
  text-transform: lowercase;
  top: -25px;
`;

const HomeDescription = ({ description }) => (
  <HomeDescriptionStyled>
    {description}
  </HomeDescriptionStyled>
);

HomeDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default HomeDescription;