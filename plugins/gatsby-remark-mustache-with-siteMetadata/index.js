const visit = require('unist-util-visit');
const { render } = require('mustache');

module.exports = (
  {
    markdownAST,
    store
  }
) => {
  const { siteMetadata } = store.getState().config;

  visit(markdownAST, ['text', 'link'], node => {
    // In case it's a link
    if (node.url) {
      node.url = render(node.url, siteMetadata);
    } else {
      node.value = render(node.value, siteMetadata);
    }
  });
};