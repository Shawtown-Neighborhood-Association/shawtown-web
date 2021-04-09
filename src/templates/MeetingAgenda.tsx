import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { format } from 'date-fns';
import { Heading } from '../components/Heading';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

import * as styles from './MeetingAgenda.module.scss';

export default function MeetingAgendaTemplate(props: any) {
  const { data } = props;
  const { mdx } = data;
  const startDate = new Date(mdx.frontmatter.starts);
  const endDate = new Date(mdx.frontmatter.ends);

  return (
    <Layout title="Meeting Agenda" description="">
      <>
        <Section className={styles.heading}>
          <h1>Meeting Notice &amp; Agenda</h1>
          <h2>{mdx.frontmatter.type} Meeting</h2>
          <table className={styles.headingTable}>
            <tbody>
              <tr>
                <td className={styles.label}>Date:</td>
                <td className={styles.value}>{format(startDate, 'EEEE, MMMM do, yyyy')}</td>
              </tr>
              <tr>
                <td className={styles.label}>Time:</td>
                <td className={styles.value}>
                  {format(startDate, 'h:mm aaa')} - {format(endDate, 'h:mm aaa')}
                </td>
              </tr>
              <tr>
                <td className={styles.label}>Location:</td>
                <td className={styles.value}>{mdx.frontmatter.location}</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
              </tr>
              <tr>
                <td className={styles.label}>Meeting ID:</td>
                <td className={styles.value}>{mdx.frontmatter.meetingID}</td>
              </tr>
              <tr>
                <td className={styles.label}>Passcode:</td>
                <td className={styles.value}>{mdx.frontmatter.meetingPasscode}</td>
              </tr>
              <tr>
                <td className={styles.label}>Connect via:</td>
                <td className={styles.value}>
                  Voice / Phone:{' '}
                  <a href={`tel:${mdx.frontmatter.meetingPhone.replace(' ', '')}`}>{mdx.frontmatter.meetingPhone}</a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className={styles.value}>
                  Computer / Smartphone / Tablet
                  <br />
                  <a href={mdx.frontmatter.meetingUrl}>{mdx.frontmatter.meetingUrl}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <Heading>Meeting Agenda</Heading>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Section>
      </>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetMeetingAgenda($slug: String!) {
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
    }
  }
`;
