import React from 'react';
import {
  useStaticQuery,
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

interface SEOPageQuery {
  file: {
    publicURL: string
  }
  site: {
    siteMetadata: {
      title: string;
      description: string;
    }
  }
}

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
  const {
    site,
    file
  }: SEOPageQuery = useStaticQuery(seoPageQuery);

  return (
    <SEO
      ogType="website"
      title={title}
      description={description || site.siteMetadata.description}
      lang={lang}
      image={image || file.publicURL}
      imageAlt={imageAlt || site.siteMetadata.title}
      keywords={keywords}
      indexPage={indexPage}
    />
  );
};

SEOPage.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  indexPage: true
};