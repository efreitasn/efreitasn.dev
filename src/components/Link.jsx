import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

const isLocalLinkCheck = link => /^\/.*/i.test(link);

const Link = ({
  to,
  target,
  children,
  className,
  title
}) => {
  const isLocalLink = isLocalLinkCheck(to);

  return isLocalLink ? (
    <GatsbyLink
      to={to}
      className={className}
      children={children}
      title={title}
      target={target}
    />
  ) : (
    <a
      href={to}
      target={target}
      className={className}
      children={children}
      title={title}
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
  className: PropTypes.string,
  title: PropTypes.string
};

export default Link;