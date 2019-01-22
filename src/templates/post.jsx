import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { COLOR_SECONDARY } from 'Styles/colors';

const PostTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  padding: 2rem 2.5rem;
`;

const PostContent = styled.div`
  line-height: 2.4rem;
  text-align: justify;

  & > p {
    padding: 0 2.5rem;
  }

  & > p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const PostFooter = styled.footer`
  align-items: center;
  background-color: ${COLOR_SECONDARY};
  color: white;
  display: flex;
  font-size: 1.8rem;
  margin-top: 2rem;
  padding: 2.5rem;
`;

const PostImg = styled.img`
  width: 100%;
`;

const AuthorImg = styled.img`
  border-radius: 50%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  height: 6rem;
  margin-right: 2rem;
`;

export default ({ data }) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  return (
    <article>
      <header>
        <PostImg
          src={data.file.publicURL}
          alt={frontmatter.img_alt}
        />
        <PostTitle>{frontmatter.title}</PostTitle>
      </header>
      <PostContent dangerouslySetInnerHTML={{
        __html: html
      }} />
      <PostFooter>
        <AuthorImg src="https://miro.medium.com/fit/c/240/240/1*fIIsv1j-3ynYNrqgE5gprg.jpeg" />
        <span>Emanuel</span>
      </PostFooter>
    </article>
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
        img_alt
      }
    }
    file(base: {
      eq: $img
    }) {
      publicURL
    }
  }
`;