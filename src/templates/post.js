import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      {frontmatter.title} - {frontmatter.date}
    </div>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;