import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEOPage = ({
  description,
  lang,
  meta,
  keywords,
  title,
  withTitleTemplate,
  indexPage
}) => (
  <StaticQuery
    query={query}
    render={data => {
      const metaDescription =
        description || data.site.siteMetadata.description;
      const metaRobots = indexPage ? 'index, follow' : 'noindex, nofollow';

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={withTitleTemplate ? `%s - ${data.site.siteMetadata.title}` : undefined}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              name: 'robots',
              content: metaRobots
            }
          ].concat(
            keywords.length > 0
              ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
              : []
          ).concat(meta)}
        />
      );
    }}
  />
);

SEOPage.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  withTitleTemplate: true,
  indexPage: true
};

SEOPage.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  withTitleTemplate: PropTypes.bool,
  indexPage: PropTypes.bool
};

export default SEOPage;