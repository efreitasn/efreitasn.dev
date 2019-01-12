// Font Awesome codepen icon
import React from 'react';
import PropTypes from 'prop-types';

const CodepenIcon = ({
  title,
  className,
  onClick
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    tabIndex={onClick ? '0' : undefined}
    className={className}
    onClick={onClick}
    onKeyPress={({ charCode }) => charCode === 13 && onClick ? onClick() : undefined}
  >
    <title>{title}</title>
    <path d="M3.375 18.266l9.422 6.281v-5.609l-5.219-3.484zM2.406 16.016l3.016-2.016-3.016-2.016v4.031zM15.203 24.547l9.422-6.281-4.203-2.812-5.219 3.484v5.609zM14 16.844l4.25-2.844-4.25-2.844-4.25 2.844zM7.578 12.547l5.219-3.484v-5.609l-9.422 6.281zM22.578 14l3.016 2.016v-4.031zM20.422 12.547l4.203-2.812-9.422-6.281v5.609zM28 9.734v8.531c0 0.391-0.203 0.781-0.531 1l-12.797 8.531c-0.203 0.125-0.438 0.203-0.672 0.203s-0.469-0.078-0.672-0.203l-12.797-8.531c-0.328-0.219-0.531-0.609-0.531-1v-8.531c0-0.391 0.203-0.781 0.531-1l12.797-8.531c0.203-0.125 0.438-0.203 0.672-0.203s0.469 0.078 0.672 0.203l12.797 8.531c0.328 0.219 0.531 0.609 0.531 1z"></path>
  </svg>
);

CodepenIcon.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CodepenIcon;