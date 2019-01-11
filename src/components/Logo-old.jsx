import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const LogoStyled = styled.div`
  display: inline-block;
`;

const TitleStyled = styled.h1`
  color: ${({ txtColor }) => txtColor};
  font-family: 'Halant', serif;
  font-size: ${({ txtSize }) => txtSize};
  font-weight: 700;
  margin: 0;
`;

const SubtitleStyled = styled.h2`
  color: ${({ txtColor }) => txtColor};
  font-family: 'Sedgwick Ave', cursive;
  font-size: ${({ txtSize }) => txtSize};
  margin: 0;
  left: -1px;
  position: relative;
  text-align: right;
  text-transform: lowercase;
  top: -30px;
`;

const Logo = ({
  fontSizeTitle,
  colorTitle,
  fontSizeSubtitle,
  colorSubtitle,
  showSubtitle
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <LogoStyled>
        <TitleStyled
          txtSize={fontSizeTitle}
          txtColor={colorTitle}
        >
          {data.site.siteMetadata.title}
        </TitleStyled>
        {showSubtitle && (
          <SubtitleStyled
            txtSize={fontSizeSubtitle}
            txtColor={colorSubtitle}
          >
            {data.site.siteMetadata.description}
          </SubtitleStyled>
        )}
      </LogoStyled>
    )}
  />
);

Logo.defaultProps = {
  showSubtitle: false
};

Logo.propTypes = {
  fontSizeTitle: PropTypes.string.isRequired,
  colorTitle: PropTypes.string.isRequired,
  fontSizeSubtitle: PropTypes.string,
  colorSubtitle: PropTypes.string,
  showSubtitle: PropTypes.bool
};

export default Logo;