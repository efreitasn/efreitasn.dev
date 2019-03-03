import React from 'react';
import PropTypes from 'prop-types';
import SEO from '.';

const SEOPost = ({
  description,
  lang,
  keywords,
  title,
  image,
  imageAlt
}) => {
  return (
    <SEO
      ogType="article"
      title={title}
      description={description}
      lang={lang}
      image={image}
      imageAlt={imageAlt}
      keywords={keywords.split(', ')}
    />
  );
};

SEOPost.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default SEOPost;