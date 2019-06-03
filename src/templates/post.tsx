import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import SEO from 'Components/SEO';
import Nullable from 'Types/Nullable';
import Post from 'Components/Post';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        lastUpdateDate?: string;
        title: string;
        description: string;
        cover_alt: Nullable<string>;
        cover_caption: Nullable<string>;
        keywords: string;
      }
    }
    file: Nullable<{
      childImageSharp: {
        fluid: FluidObject
      }
    }>
  };
}

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
        lastUpdateDate
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

export default function PostTemplate({
  data
}: Props) {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords.split(', ')}
        image={data.file ? data.file.childImageSharp.fluid.src : undefined}
        imageAlt={frontmatter.cover_alt ? frontmatter.cover_alt : undefined}
        article
      />
      <article>
        <Post
          title={frontmatter.title}
          createdAt={frontmatter.date}
          updatedAt={frontmatter.lastUpdateDate}
          cover={data.file ? data.file.childImageSharp.fluid : undefined}
          coverAlt={frontmatter.cover_alt ? frontmatter.cover_alt : undefined}
          coverCaption={frontmatter.cover_caption ? frontmatter.cover_caption : undefined}
          content={html}
        />
      </article>
    </>
  );
}