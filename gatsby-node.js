/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path = require('path');
const {
  createFilePath  
} = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'src/posts',
      trailingSlash: false
    });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  const { createPage } = actions;
  const {
    errors,
    data
  } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) return Promise.reject(errors);

  data.allMarkdownRemark.edges.forEach(({ node }) => createPage({
    path: `/posts${node.fields.slug}`,
    component: blogPostTemplate,
    context: {
      slug: node.fields.slug
    }
  }));
};
