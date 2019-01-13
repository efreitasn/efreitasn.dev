import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'Components/Link';
import { iconLinksListItemAnimation } from 'Styles/animations';
import { COLOR_SECONDARY } from 'Styles/colors';

const IconLinksListItem = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  padding: 1.8rem 3rem;
  text-transform: uppercase;

  /* Animation */
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
  animation-name: ${iconLinksListItemAnimation};
  transform: translateX(-100%);
`;

const IconLinksListLink = styled(Link)`
  display: block;
  text-decoration: none;
  transition: border-left .5s ease;

  &:not(:last-child) {
    border-bottom: 1px dashed ${COLOR_SECONDARY};
  }

  &:hover {
    border-left: 10px solid ${COLOR_SECONDARY};
  }
`;

const IconLinksListIconWrapper = styled.div`
  margin-right: 3rem;
`;

const IconLinksList = ({
  iconLinks,
  itemAnimationDurationS,
  animationDelayS
}) => (
  <div>
    {iconLinks.map(({
      label,
      icon,
      url
    }, i) => (
      <IconLinksListLink to={url} key={url} target="_blank">
        <IconLinksListItem
          animationDuration={`${itemAnimationDurationS}s`}
          animationDelay={`${(i * itemAnimationDurationS) + animationDelayS}s`}
        >
          <IconLinksListIconWrapper>
            {icon}
          </IconLinksListIconWrapper>
          {label}
        </IconLinksListItem>
      </IconLinksListLink>
    ))}
  </div>
);

IconLinksList.propTypes = {
  iconLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    isLocal: PropTypes.bool
  })).isRequired,
  itemAnimationDurationS: PropTypes.number.isRequired,
  animationDelayS: PropTypes.number
};

IconLinksList.defaultProps = {
  animationDelayS: 0
};

export default IconLinksList;