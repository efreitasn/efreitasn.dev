import React from 'react';
import { graphql } from 'gatsby';
// Components
import PostItem from 'Components/PostItem';
import SEOPage from 'Components/SEOPage';

const IndexPage = ({ data }) => {
  return (
    <>
      <SEOPage
        title={data.site.siteMetadata.title}
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
            url={`/posts/${fields.slug}`}
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
    allMarkdownRemark {
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
