const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug.replace('/content', '')
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const blogPostTemplate = path.resolve('src/templates/post.tsx');
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
            fileAbsolutePath
          }
        }
      }
    }
  `);

  if (errors) throw errors;

  const { edges } = data.allMarkdownRemark;
  
  for (const { node } of edges) {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        coverImgGlob: path.resolve(node.fileAbsolutePath, '..', 'cover*')
      }
    });
  }
};
