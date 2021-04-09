import React from 'react';
import { graphql, Link } from 'gatsby';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

const Documents = (props: any) => {
  const { data } = props;
  return (
    <Layout title="Important Documents" description="">
      <>
        <Section>
          <h1>Documents</h1>
          <ul>
            {data.allMdx.edges.map((i: any) => {
              return (
                <li>
                  <Link to={i.node.fields.slug}>{i.node.frontmatter.title ?? 'Title Here'}</Link>
                </li>
              );
            })}
          </ul>
        </Section>
      </>
    </Layout>
  );
};

export const query = graphql`
  query GetAllDocuments {
    allMdx(filter: { fields: { source: { eq: "documents" } } }) {
      edges {
        node {
          frontmatter {
            author
            title
          }
          fields {
            source
            slug
          }
        }
      }
    }
  }
`;
export default Documents;
