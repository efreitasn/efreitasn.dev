import React from 'react';
import { graphql } from 'gatsby';
// Components
import PostItem from 'Components/PostItem';
import SEOPage from 'Components/SEO/Page';

const IndexPage = ({ data }) => {
  return (
    <>
      <SEOPage
        title="Home"
        keywords={['developer', 'front-end']}
        withTitleTemplate={false}
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

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
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

export default IndexPage;
