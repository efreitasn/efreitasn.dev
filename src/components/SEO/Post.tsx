import React from 'react';
import SEO from '.';

interface Props {
  description: string;
  lang: string;
  keywords: string;
  title: string;
  image: string;
  imageAlt: string;
};

export default function SEOPost({
  description,
  lang,
  keywords,
  title,
  image,
  imageAlt
}: Props) {
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

SEOPost.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  indexPage: true
};