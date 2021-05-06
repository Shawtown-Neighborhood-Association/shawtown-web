import React from 'react';
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
          <ul>{items}</ul>
        </Section>
      </>
    </Layout>
  );
};

export default IndexPage;
