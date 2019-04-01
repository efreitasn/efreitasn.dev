import React from 'react';
import { graphql } from 'gatsby';
// Components
import PostItem from 'Components/PostItem';
import SEOPage from 'Components/SEO/Page';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
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
        title
      }
    }
    allMarkdownRemark (
      filter: {
        fields: {
          type: {
            eq: "post"
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
      <SEOPage
        title="Home"
        keywords={['developer', 'front-end']}
      />
      <div>
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
      </div>
    </>
  );
};

export default IndexPage;
