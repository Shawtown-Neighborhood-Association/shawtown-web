import { relative } from 'node:path';
import * as React from 'react';
import { Heading } from '../components/Heading';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

// markup
const IndexPage = () => {
  const items = [];
  for (var i = 0; i < 100; i++) {
    items.push(<li key={i}>{i}</li>);
  }

  return (
    <Layout title="Home" description="">
      <>
        <Hero title="Shawtown Neighborhood" lead="Welcome to the" />
        <Section>
          <h1>Gatsby: {process.env.GATSBY_BRAD}</h1>
          <h1>API: {process.env.SNA_SURVEYJS_API}</h1>
        </Section>
        <div className="container">
          <ul>{items}</ul>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;
