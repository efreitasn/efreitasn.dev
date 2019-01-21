// Font Awesome calendar icon
import React from 'react';
import PropTypes from 'prop-types';

const CalendarIcon = ({
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
    <path d="M2 26h22v-16h-22v16zM8 7v-4.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v4.5c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM20 7v-4.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v4.5c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM26 6v20c0 1.094-0.906 2-2 2h-22c-1.094 0-2-0.906-2-2v-20c0-1.094 0.906-2 2-2h2v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h6v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h2c1.094 0 2 0.906 2 2z"></path>
  </svg>
);

CalendarIcon.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CalendarIcon;