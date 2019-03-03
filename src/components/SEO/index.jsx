import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { COLOR_PRIMARY } from 'Styles/colors';

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        url
        author {
          twitter
        }
      }
    }
  }
`;

const SEO = ({
  description: descriptionProps,
  lang,
  meta,
  keywords,
  title: titleProps,
  indexPage,
  ogType,
  image: imageProps,
  imageAlt
}) => (
  <StaticQuery
    query={query}
    render={data => {
      const description =
        descriptionProps || data.site.siteMetadata.description;
      const metaRobots = indexPage ? 'index, follow' : 'noindex, nofollow';
      const title = `${titleProps} - ${data.site.siteMetadata.title}`;
      const image = `${data.site.siteMetadata.url}${imageProps}`;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          meta={[
            // Colors
            {
              name: 'theme-color',
              content: COLOR_PRIMARY
            },
            {
              name: 'msapplication-navbutton-color',
              content: COLOR_PRIMARY
            },
            {
              name: 'apple-mobile-web-app-status-bar-style',
              content: COLOR_PRIMARY
            },
            // Open graph
            {
              property: 'og:title',
              content: title
            },
            {
              property: 'og:description',
              content: description
            },
            {
              property: 'og:type',
              content: ogType
            },
            {
              property: 'og:image',
              content: image
            },
            // Twitter
            {
              name: 'twitter:card',
              content: 'summary_large_image'
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author.twitter
            },
            {
              name: 'twitter:title',
              content: title
            },
            {
              name: 'twitter:description',
              content: description
            },
            {
              name: 'twitter:image',
              content: image
            },
            {
              name: 'twitter:image:alt',
              content: imageAlt
            },
            // Others
            {
              name: 'description',
              content: description
            },
            {
              name: 'robots',
              content: metaRobots
            }
          ].concat(
            keywords.length > 0
              ? {
                name: 'keywords',
                content: keywords.join(`, `)
              }
              : []
          ).concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  indexPage: true
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })),
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  indexPage: PropTypes.bool,
  ogType: PropTypes.oneOf(['website', 'article']).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default SEO;