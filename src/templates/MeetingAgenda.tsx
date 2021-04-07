import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { format } from 'date-fns';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

export default function MeetingAgendaTemplate(props: any) {
  const { data } = props;
  const { mdx } = data;
  const startDate = new Date(mdx.frontmatter.starts);
  const endDate = new Date(mdx.frontmatter.ends);

  return (
    <Layout title="Meeting Agenda" description="">
      <>
        <Section>

          <h1>Meeting Notice &amp; Agenda</h1>
          <h2>{mdx.frontmatter.type} Meeting</h2>
          <table>
            <tbody>
              <tr>
                <td>Date:</td>
                <td>{format(startDate, "EEEE, MMMM do, yyyy")}</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>{format(startDate, "h:mm aaa")} - {format(endDate, "h:mm aaa")}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{mdx.frontmatter.location}</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
              </tr>
              <tr>
                <td>Meeting ID:</td>
                <td>{mdx.frontmatter.meetingID}</td>
              </tr>
              <tr>
                <td>Passcode:</td>
                <td>{mdx.frontmatter.meetingPasscode}</td>
              </tr>
              <tr>
                <td>Connect via:</td>
                <td>Voice / Phone: {mdx.frontmatter.meetingPhone}</td>
              </tr>
              <tr>
                <td></td>
                <td>Computer / Smartphone / Tablet<br />{mdx.frontmatter.meetingUrl}</td>
              </tr>
            </tbody>
          </table>

        </Section>
        <Section>
          <h3>Meeting Agenda</h3>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Section>
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
query GetMeetingAgenda($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
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
  }
}

`
