const path = require('path');
const slugify = require('slugify');
const format = require('date-fns/format');
const { createFilePath } = require('gatsby-source-filesystem');

/**
 * Event that occurs whenever a Source
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);
    const source = parent?.sourceInstanceName;

    createNodeField({
      node,
      name: 'source',
      value: source ?? 'unknown'
    });

    if (source === 'agendas' || source === 'minutes') {
      const startDate = new Date(node.frontmatter.starts);
      const slug = `/meetings/${source}/${startDate.getFullYear()}/${format(startDate, 'MMMMMM')}/${format(
        startDate,
        'dd'
      )}/${slugify(node.frontmatter.type)}/`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
    }

    if (source === 'documents') {
      const slug = `/documents${createFilePath({ node, getNode })}`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const mdxPages = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            fields {
              slug
              source
            }
          }
        }
      }
    }
  `);

  mdxPages.data.allMdx.edges.forEach(({ node }) => {
    if (node.fields?.source === 'agendas' || node.fields?.source === 'minutes') {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/Meeting${node.fields.source === 'agendas' ? 'Agenda' : 'Minutes'}.tsx`
        ),
        context: {
          slug: node.fields.slug
        }
      });
    }

    if (node.fields?.source === 'documents') {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/Documents.tsx'),
        context: {
          slug: node.fields.slug
        }
      });
    }
  });
};
