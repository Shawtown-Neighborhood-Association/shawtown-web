import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

import * as styles from './Documents.module.scss';
import { TableOfContents } from '../components/TableOfContents';

export default function DocumentTemplate(props: any) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout title="Documents" description="">
      <>
        <Section>
          <h1>{mdx.frontmatter?.title ?? 'Document'}</h1>
          <TableOfContents items={mdx.tableOfContents?.items} />
        </Section>
        <Section className={styles.document}>
          <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
        </Section>
      </>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetDocument($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      tableOfContents
      headings {
        value
        depth
      }
    }
  }
`;
