import React from 'react';
import PropTypes from 'prop-types';
import SEO from '.';

const SEOPost = ({
  description,
  lang,
  keywords,
  title,
  image,
  imageAlt,
  indexPage
}) => {
  // TODO put StaticQuery with default image and image_alt from siteMetadata
  return (
    <SEO
      ogType="website"
      title={title}
      description={description}
      lang={lang}
      image={image}
      imageAlt={imageAlt}
      keywords={keywords}
      indexPage={indexPage}
    />
  );
};

SEOPost.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  indexPage: PropTypes.bool
};

export default SEOPost;