import React from 'react';
import {
  StaticQuery,
  graphql
} from 'gatsby';
import SEO from '.';

interface Props {
  description?: string,
  lang: string,
  keywords: string[],
  title: string,
  image?: string,
  imageAlt?: string,
  indexPage: boolean
};

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
        description
      }
    }
  }
`;

export default function SEOPage({
  description,
  lang,
  keywords,
  title,
  image,
  imageAlt,
  indexPage
}: Props) {
  return (
    <StaticQuery
      query={seoPageQuery}
      render={data => (
        <SEO
          ogType="website"
          title={title}
          description={description || data.site.siteMetadata.description}
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

SEOPage.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  indexPage: true
};