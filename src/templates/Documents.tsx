import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

import * as styles from './Documents.module.scss';

export default function DocumentTemplate(props: any) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout title="Documents" description="">
      <>
        <Section>
          <h1>{mdx.frontmatter?.title ?? 'Document'}</h1>
          {mdx.tableOfContents?.items && (
            <ul>
              {mdx.tableOfContents?.items.map((i: any) => {
                return <li>{i.title}</li>;
              })}
            </ul>
          )}
        </Section>
        <Section className={styles.document}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Section>
      </>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetDocument($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`;
