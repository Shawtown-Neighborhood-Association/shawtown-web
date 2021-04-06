const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { format } = require('date-fns');

/**
 * Event that occurs whenever a Source
 */
exports.onCreateNode = ({node, getNode, actions}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({node, getNode})
    });

    if (parent?.internal?.type === 'File') {
      createNodeField({
        node,
        name: 'source',
        value: parent.sourceInstanceName
      });
    }

    if (node.frontmatter?.date) {
      const fmDate = new Date(node.frontmatter.date);

      createNodeField({
        node,
        name: 'month',
        value: fmDate.getMonth()
      });

      createNodeField({
        node,
        name: 'year',
        value: fmDate.getFullYear()
      });

      createNodeField({
        node,
        name: 'date',
        value: fmDate
      });

      createNodeField({
        node,
        name: 'day',
        value: fmDate.getDay()
      });

    }
  }
}

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;

  const mdxPages = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              source
              date
              month
              day
              year
            }
          }
        }
      }
    }
  `);

  mdxPages.data.allMdx.edges.forEach(({node}) => {

    if (node.fields?.source === 'agendas' || node.fields?.source === 'minutes') {

      const documentDate = new Date(node.fields.date);

      const meetingPath = `/meetings/${node.fields.year}/${format(documentDate, "MMMM")}/${format(documentDate, "dd")}`
      const meetingContext = {
        slug: node.fields.slug
      }

      if (node.fields.source === 'agendas') {
        createPage({
          path: `${meetingPath}/agenda/`,
          component: path.resolve('./src/templates/MeetingAgenda.tsx'),
          context: meetingContext
        });
      }

      if (node.fields.source === "minutes") {
        createPage({
          path: `${meetingPath}/minutes/`,
          component: path.resolve('./src/layout/Layout.tsx'),
          context: meetingContext
        });
      }
    }
  });

}
