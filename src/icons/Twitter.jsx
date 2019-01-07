// Font Awesome twitter icon
import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({
  title,
  className,
  onClick
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 28"
    tabIndex={onClick ? '0' : undefined}
    className={className}
    onClick={onClick}
    onKeyPress={({ charCode }) => charCode === 13 && onClick ? onClick() : undefined}
  >
    <title>{title}</title>
    <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
  </svg>
);

TwitterIcon.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default TwitterIcon;