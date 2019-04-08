import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isLocalLinkUtil from 'Utils/isLocalLink';

interface Props {
  to: string;
  children: React.ReactNode;
  target: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  rel?: string;
  title?: string;
}

const Link = ({
  to,
  target,
  children,
  className,
  title,
  rel
}: Props) => {
  const isLocalLink = isLocalLinkUtil(to);

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
      rel={rel}
    />
  );
};

Link.defaultProps = {
  target: '_self'
};

export default Link;