import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';
import { TableOfContents } from '../components/TableOfContents';

export default function MeetingMinutes(props: any) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout title="Meeting Minutes" description="">
      <Section>
        <h1>Meeting Minutes</h1>
        <TableOfContents items={mdx.tableOfContents?.items} />
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
        meetingID
        meetingPasscode
        meetingPhone
        meetingUrl
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
