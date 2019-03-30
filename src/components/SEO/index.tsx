import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { COLOR_PRIMARY } from 'Styles/colors';

interface Props {
  description: string;
  lang: string;
  meta: Array<{
    name: string;
    content: string
  }>;
  keywords: string[];
  title: string;
  indexPage: boolean;
  ogType: 'website' | 'article';
  image: string;
  imageAlt: string;
}

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author {
          twitter
        }
      }
    }
  }
`;

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title: titleProps,
  indexPage,
  ogType,
  image: imageProps,
  imageAlt
}: Props) => (
  <StaticQuery
    query={query}
    render={data => {
      const metaRobots = indexPage ? 'index, follow' : 'noindex, nofollow';
      const title = `${titleProps} - ${data.site.siteMetadata.title}`;
      const image = `${data.site.siteMetadata.siteUrl}${imageProps}`;

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
  lang: 'en',
  meta: [],
  keywords: [],
  indexPage: true
};

export default SEO;