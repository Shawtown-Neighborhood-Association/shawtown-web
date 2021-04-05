import React from 'react';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

const About = () => {
  return (
    <Layout title="About the Shawtown Neighborhood Association">
      <>
        <h1>About Us</h1>
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
