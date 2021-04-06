import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

const About = () => {
  return (
    <Layout title="About the Shawtown Neighborhood Association" description="">
      <>
        <Hero title="Neighborhood Association" lead="Learn more about the" />
        <Section id="brad">
          <div className="row">
            <div className="col-sm">
              1
            </div>
            <div className="col-sm">
              2
            </div>
            <div className="col-sm">
              3
            </div>
          </div>
        </Section>
      </>
    </Layout>
  )
}

export default About;
