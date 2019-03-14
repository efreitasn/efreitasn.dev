import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEOPost from 'Components/SEO/Post';
import PageTitle from 'Components/PageTitle';
import Link from 'Components/Link';
import PageContent from 'Components/PageContent';
import {
  COLOR_GREY_3
} from 'Styles/colors';
import moment from 'moment';
import { bk2 } from 'Styles/breakpoints';

const PostImg = styled.img`
  width: 100%;
`;

const PostImgCaption = styled.figcaption`
  color: ${COLOR_GREY_3};
  font-size: 1.4rem;
  padding: 1.5rem 2rem;
  text-align: center;
  line-height: 1.4;
  margin-top: -4px;
`;

const PostTitle = styled(PageTitle)`
  margin-bottom: 0;
  margin-top: 0;
`;

const PostDate = styled.time`
  color: ${COLOR_GREY_3};
  padding: 0 4rem;

  ${bk2`
    padding: 0 2rem
  `}
`;

const PostTitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1.5rem;
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
          <figure>
            <PostImg
              src={data.file.publicURL}
              alt={frontmatter.img_alt}
            />
            <PostImgCaption>
              {frontmatter.img_caption_link ? (
                <Link
                  to={frontmatter.img_caption_link}
                  rel="noopener noreferrer"
                  target="_blank"
                >{frontmatter.img_caption_text}</Link>
              ) : (
                <span>{frontmatter.img_caption_text}</span>
              )}
            </PostImgCaption>
          </figure>
          <PostTitleWrapper>
            <PostTitle>{frontmatter.title}</PostTitle>
            <PostDate dateTime={frontmatter.date}>{moment(frontmatter.date).format('MMMM DD, YYYY')}</PostDate>
          </PostTitleWrapper>
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
        date
        title
        description
        img_alt
        img_caption_text
        img_caption_link
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