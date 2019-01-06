import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeTitleStyled = styled.h1`
  font-family: 'Halant', serif;
  font-size: 13.5rem;
  font-weight: 700;
  margin: 0;
  color: #8bc5d4;
  text-shadow: 0px 5px 1px #354b50;
`;

const HomeTitle = ({ title }) => (
  <HomeTitleStyled>{title}</HomeTitleStyled>
);

HomeTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default HomeTitle;