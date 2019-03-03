import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEOPost from 'Components/SEO/Post';
import PageTitle from 'Components/PageTitle';
import PageContent from 'Components/PageContent';

const PostImg = styled.img`
  width: 100%;
`;

export default ({ data }) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  return (
    <>
      <SEOPost
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
        image={data.file.publicURL}
        imageAlt={frontmatter.img_alt}
      />
      <article>
        <header>
          <PostImg
            src={data.file.publicURL}
            alt={frontmatter.img_alt}
          />
          <PageTitle>{frontmatter.title}</PageTitle>
        </header>
        <PageContent dangerouslySetInnerHTML={{
          __html: html
        }} />
      </article>
    </>
  );
};

export const query = graphql`
  query BlogPostBySlug(
    $slug: String!
    $img: String!
  ) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        img_alt
        keywords
      }
    }
    file(base: {
      eq: $img
    }) {
      publicURL
    }
  }
`;