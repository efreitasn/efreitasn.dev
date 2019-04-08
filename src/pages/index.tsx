import React from 'react';
import { graphql } from 'gatsby';
// Components
import PostItem from 'Components/PostItem';
import SEO from 'Components/SEO';

interface Props {
  data: {
    site: {
      siteMetadata: {
        description: string
      }
    },
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string,
            description: string,
            date: string
          }
          fields: {
            slug: string
          }
        }
      }>
    }
  }
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark (
      filter: {
        frontmatter: {
          showInFeed: {
            eq: true
          }
        }
      }
      sort: {
        order: DESC,
        fields: [
          frontmatter___date
        ]
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const IndexPage = ({
  data
}: Props) => {
  return (
    <>
      <SEO
        title="Home"
        description={data.site.siteMetadata.description}
        keywords={['developer', 'front-end']}
      />
      <>
        {data.allMarkdownRemark.edges.map(({
          node: {
            frontmatter,
            fields
          }
        }) => (
          <PostItem
            key={fields.slug}
            title={frontmatter.title}
            description={frontmatter.description}
            url={`/posts${fields.slug}`}
            date={frontmatter.date}
          />
        ))}
      </>
    </>
  );
};

export default IndexPage;
