import React from 'react';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

export default function MeetingAgendaTemplate(props: any) {
  console.log('Agenda Data', props.data);

  return (
    <Layout title="Meeting Agenda" description="">
      <>
        <Section>
          <h1>Meeting Agenda Template {JSON.stringify(props.data)}</h1>
          <h2>Brad</h2>
        </Section>
      </>
    </Layout>
  )
}

