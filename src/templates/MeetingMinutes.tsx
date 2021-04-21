import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';
import { TableOfContents } from '../components/TableOfContents';

import * as styles from './MeetingMinutes.module.scss';

export default function MeetingMinutes(props: any) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout title="Meeting Minutes" description="">
      <Section>
        <h1>Meeting Minutes</h1>
        <TableOfContents items={mdx.tableOfContents?.items} />
      </Section>
      <Section className={styles.minutes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetMeetingMinutes($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        starts
        ends
        type
        location
        author
      }
      body
      tableOfContents
      headings {
        depth
        value
      }
    }
  }
`;
