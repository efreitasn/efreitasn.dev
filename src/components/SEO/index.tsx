import React from 'react';
import {
  useStaticQuery,
  graphql
} from 'gatsby';
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
  index: boolean;
  article: boolean;
  image?: string;
  imageAlt?: string;
}

interface SEOQuery {
  file: {
    publicURL: string
  }
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      author: {
        twitter: string;
      }
    }
  }
};

const seoQuery = graphql`
  query SEOQuery {
    file(base: {
      eq: "the-default.png"
    }) {
      publicURL
    }
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
  index,
  article,
  image: imageProps,
  imageAlt
}: Props) => {
  const {
    site,
    file
  }: SEOQuery = useStaticQuery(seoQuery);
  const metaRobots = index ? 'index, follow' : 'noindex, nofollow';
  const title = `${titleProps} - ${site.siteMetadata.title}`;
  const image = `${site.siteMetadata.siteUrl}${imageProps || file.publicURL}`;
  const ogType = article ? 'article' : 'website';

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
          content: site.siteMetadata.author.twitter
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
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  index: true,
  article: false
};

export default SEO;