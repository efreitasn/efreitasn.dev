const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const getMarkdownFileType = path => {
  // Check if it is a post
  if (/\/posts\/.*/.test(path)) {
    return 'post';
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false
    });

    createNodeField({
      node,
      name: `slug`,
      value: slug.replace('/content', '')
    });

    createNodeField({
      node,
      name: 'type',
      value: getMarkdownFileType(node.fileAbsolutePath)
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const blogPostTemplate = path.resolve(`src/templates/post.tsx`);
  const { createPage } = actions;
  const {
    errors,
    data
  } = await graphql(`
    {
      allMarkdownRemark (
        filter: {
          fields: {
            type: {
              eq: "post"
            }
          }
        }
      ) {
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

  data.allMarkdownRemark.edges.forEach(({ node }) => createPage({
    path: `/posts${node.fields.slug}`,
    component: blogPostTemplate,
    context: {
      slug: node.fields.slug,
      coverImgGlob: path.resolve(node.fileAbsolutePath, '..', 'cover*')
    }
  }));
};
