import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { COLOR_SECONDARY } from 'Styles/colors';

const a = keyframes`
  from {
    transform: translateX(-200px);
  }

  to {
    transform: translateX(0);
  }
`;

const LinksListItem = styled.div`
  padding: 2rem 3rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  animation-delay: .2s;
  animation-duration: .5s;
  animation-name: ${a};
  animation-fill-mode: forwards;
  transform: translateX(-200px);
`;

const LinksListLink = styled.a`
  display: block;
  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 1px dashed ${COLOR_SECONDARY};
  }
`;

const LinksListIconWrapper = styled.div`
  margin-right: 3rem;
`;

const LinksList = ({ links }) => (
  <div>
    {links.map(({
      label,
      icon,
      url
    }) => (
      <LinksListLink href={url} key={url} target="_blank">
        <LinksListItem>
          <LinksListIconWrapper>
            {icon}
          </LinksListIconWrapper>
          {label}
        </LinksListItem>
      </LinksListLink>
    ))}
  </div>
);

LinksList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.node
  }))
};

export default LinksList;