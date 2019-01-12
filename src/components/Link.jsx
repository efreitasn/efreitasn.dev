import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const isLocalLinkCheck = link => /^\/.*/i.test(link);

const Link = ({
  to,
  target,
  children,
  className
}) => {
  const isLocalLink = isLocalLinkCheck(to);

  return isLocalLink ? (
    <GatsbyLink
      to={to}
      className={className}
      children={children}
    />
  ) : (
    <a
      href={to}
      target={target}
      className={className}
      children={children}
    />
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf([
    '_self',
    '_blank',
    '_parent',
    '_top'
  ]),
  className: PropTypes.string
};

export default Link;