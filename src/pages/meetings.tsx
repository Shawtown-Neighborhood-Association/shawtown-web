import React from 'react';
import { graphql, Link } from 'gatsby';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';


const Meetings = (props: any) => {
  const { data } = props;
  return (
    <Layout title="Meetings" description="">
      <>
      <Section>
        <h1>Meetings</h1>
      </Section>
      <Section>
        <h1>Agendas</h1>
        <ul>
          {data.allMdx.edges.map((x: any, index: number) => {
            const { node } = x;
              if (node.fields.source === 'agendas') {
            return (
            <li key={index}><Link to={node.fields.slug}>Agenda ({node.frontmatter.starts})</Link></li>
            )
            }
          })}
        </ul>
      </Section>
      </>
    </Layout>
  )
}

export const query = graphql`
query GetAllMeetingDocuments {
  allMdx(sort: {fields: frontmatter___starts, order: DESC}) {
    edges {
      node {
        frontmatter {
          author
          starts
          ends
        }
        fields {
          source
          slug
        }
      }
    }
  }
}
`
export default Meetings;
