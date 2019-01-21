import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { COLOR_GREY_1 } from 'Styles/colors';

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
  background-color: ${COLOR_GREY_1};
  margin-top: 2rem;
  padding: 2.5rem;
`;

const PostImg = styled.div`
  background-image: ${({ imgUrl }) => `url('${imgUrl}')`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
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
          imgUrl={data.file.publicURL}
          role="img"
          aria-label={frontmatter.img_alt}
        />
        <PostTitle>{frontmatter.title}</PostTitle>
      </header>
      <PostContent dangerouslySetInnerHTML={{
        __html: html
      }} />
      <PostFooter>
        a
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