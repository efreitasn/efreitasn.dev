// Icomoon medium icon
import React from 'react';
import PropTypes from 'prop-types';

const MediumIcon = ({
  title,
  className,
  onClick
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    tabIndex={onClick ? '0' : undefined}
    className={className}
    onClick={onClick}
    onKeyPress={({ charCode }) => charCode === 13 && onClick ? onClick() : undefined}
  >
    <title>{title}</title>
    <path d="M3.795 8.48c0.040-0.393-0.111-0.781-0.404-1.045l-2.987-3.6v-0.537h9.276l7.171 15.727 6.304-15.727h8.845v0.537l-2.556 2.449c-0.22 0.168-0.329 0.444-0.284 0.717v18c-0.045 0.272 0.064 0.547 0.284 0.716l2.493 2.449v0.537h-12.547v-0.537l2.583-2.509c0.253-0.253 0.253-0.328 0.253-0.717v-14.548l-7.187 18.251h-0.969l-8.367-18.251v12.232c-0.069 0.515 0.101 1.032 0.463 1.404l3.36 4.080v0.536h-9.527v-0.537l3.36-4.080c0.36-0.371 0.52-0.893 0.435-1.403v-14.144z"></path>
  </svg>
);

MediumIcon.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default MediumIcon;