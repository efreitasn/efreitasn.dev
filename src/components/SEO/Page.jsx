import React from 'react';
import PropTypes from 'prop-types';
import {
  StaticQuery,
  graphql
} from 'gatsby';
import SEO from '.';

const seoPageQuery = graphql`
  {
    file(base: {
      eq: "the-default.png"
    }) {
      publicURL
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

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
    <StaticQuery
      query={seoPageQuery}
      render={data => (
        <SEO
          ogType="website"
          title={title}
          description={description}
          lang={lang}
          image={image || data.file.publicURL}
          imageAlt={imageAlt || data.site.siteMetadata.title}
          keywords={keywords}
          indexPage={indexPage}
        />
      )}
    />
  );
};

SEOPost.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  indexPage: PropTypes.bool
};

export default SEOPost;