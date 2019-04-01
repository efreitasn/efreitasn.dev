import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEOPost from 'Components/SEO/Post';
import PageTitle from 'Components/PageTitle';
import PageContent from 'Components/PageContent';
import {
  COLOR_GREY_3
} from 'Styles/colors';
import moment from 'moment';
import { bk2 } from 'Styles/breakpoints';
import GatsbyImage, { FluidObject } from 'gatsby-image';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
        description: string;
        cover_alt: string;
        cover_caption: string;
        keywords: string;
      }
    }
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
};

export const query = graphql`
  query BlogPostBySlug(
    $slug: String!
    $coverImgGlob: String!
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
        cover_alt
        cover_caption
        keywords
      }
    }
    file(absolutePath: {
      glob: $coverImgGlob
    }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

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

export default function PostTemplate({
  data
}: Props) {
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
        image={data.file.childImageSharp.fluid.src}
        imageAlt={frontmatter.cover_alt}
      />
      <article>
        <header>
          <figure>
            <GatsbyImage
              fluid={data.file.childImageSharp.fluid}
              alt={frontmatter.cover_alt}
            />
            <PostImgCaption>
              <span>{frontmatter.cover_caption}</span>
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