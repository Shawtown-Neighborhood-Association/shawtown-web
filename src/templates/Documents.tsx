import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

export default function DocumentTemplate(props: any) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout title="Documents" description="">
      <>
        <Section>
          <h1>Document</h1>
        </Section>
        <Section>
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
    }
  }
`;
