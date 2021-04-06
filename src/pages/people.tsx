import React from 'react';
import { Hero } from '../components/Hero';
import { Person } from '../components/Person';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

import * as styles from './scss/people.module.scss';


const People = () => {
  return (
    <Layout title="People">
      <>
        <Hero title="Neighborhood Association" lead="Meet the" />

        <Section id="intro">
          <div className="row">
            <div className="col-sm">
              Left
            </div>
            <div className="col-sm">
              Right
            </div>
          </div>
        </Section>

        <Section id="officers" className={styles.officers}>
          <div className="row">
            <div className="col-sm">
              <h2>Steering Committee</h2>
              <h1>Officers</h1>


              <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                <Person name="Brad Candell" title="President" residentSince={1979}>This is the biography</Person>
                <Person name="Aram Mann-Whitcombe" title="Vice President">This is the biography</Person>
                <Person name="Cindy Schlosser" title="Treasurer">This is the biography</Person>
                <Person name="Tim Solfest" title="Secretary">This is the biography</Person>
                <Person name="Drew Kaiser" title="Director of Information &amp; Communications">This is the biography</Person>
              </div>
            </div>
          </div>
        </Section>

        <Section id="atLarge" className={styles.atLarge}>
        <div className="row">
            <div className="col-sm">
              <h2>Steering Committee</h2>
              <h1>At-Large Members</h1>

              <div style={{ display: 'flex'}}>
                <Person name="James Candell">This is the biography</Person>
                <Person name="Charlie Kennedy">This is the biography</Person>
                <Person name="Susie Risler">This is the biography</Person>
                <Person name="Erin Shadbolt">This is the biography</Person>
              </div>
            </div>
          </div>
        </Section>

      </>
    </Layout>
  )
}

export default People;
