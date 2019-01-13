import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'Components/Link';
import { iconLinksGroupItemAnimation } from 'Styles/animations';

const IconLinksGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconLinksGroupItemStyled = styled.div`
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
  animation-name: ${iconLinksGroupItemAnimation};
  transform: translateX(400px);
  transition: margin-top .2s ease;

  &:hover {
    margin-top: -2px;
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const IconLinksGroup = ({
  iconLinks,
  itemAnimationDurationS,
  animationDelayS
}) => (
  <IconLinksGroupStyled>
    {iconLinks.map(({
      url,
      icon,
      label
    }, i) => (
      <IconLinksGroupItemStyled
        animationDuration={`${itemAnimationDurationS}s`}
        animationDelay={`${(i * itemAnimationDurationS) + animationDelayS}s`}
        key={url}
      >
        <Link to={url} title={label} target="_blank">
          {icon}
        </Link>
      </IconLinksGroupItemStyled>
    ))}
  </IconLinksGroupStyled>
);

IconLinksGroup.propTypes = {
  iconLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  itemAnimationDurationS: PropTypes.number.isRequired,
  animationDelayS: PropTypes.number
};

IconLinksGroup.defaultProps = {
  animationDelayS: 0
};

export default IconLinksGroup;