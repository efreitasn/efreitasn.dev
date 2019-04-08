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
  };
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      author: {
        twitter: string;
      }
    }
  };
}

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
          content: COLOR_PRIMARY,
          name: 'theme-color'
        },
        {
          content: COLOR_PRIMARY,
          name: 'msapplication-navbutton-color'
        },
        {
          content: COLOR_PRIMARY,
          name: 'apple-mobile-web-app-status-bar-style'
        },
        // Open graph
        {
          content: title,
          property: 'og:title'
        },
        {
          content: description,
          property: 'og:description'
        },
        {
          content: ogType,
          property: 'og:type'
        },
        {
          content: image,
          property: 'og:image'
        },
        // Twitter
        {
          content: 'summary_large_image',
          name: 'twitter:card'
        },
        {
          content: site.siteMetadata.author.twitter,
          name: 'twitter:creator'
        },
        {
          content: title,
          name: 'twitter:title'
        },
        {
          content: description,
          name: 'twitter:description'
        },
        {
          content: image,
          name: 'twitter:image'
        },
        {
          content: imageAlt,
          name: 'twitter:image:alt'
        },
        // Others
        {
          content: description,
          name: 'description'
        },
        {
          content: metaRobots,
          name: 'robots'
        }
      ].concat(
        keywords.length > 0
          ? {
            content: keywords.join(`, `),
            name: 'keywords'
          }
          : []
      ).concat(meta)}
    />
  );
};

SEO.defaultProps = {
  article: false,
  index: true,
  keywords: [],
  lang: 'en',
  meta: []
};

export default SEO;