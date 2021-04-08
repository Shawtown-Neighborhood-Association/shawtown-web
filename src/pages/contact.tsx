import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';

import * as styles from './scss/contact.module.scss';

const Contact: React.FC = () => {
  const address = '1415 Menomonie Street, Eau Claire, WI 54703';
  const phoneNumber = '(715) 222-1111';
  const emailAddress = 'info@shawtown.org';

  return (
    <Layout title="Contact Us" description="">
      <>
        <Hero title="Contacts" lead="Get in touch with us" />

        <Section className={styles.sectionDetails}>
          <div className="row">
            <div className="col-sm">
              <h1>Contact Us</h1>
              <p>Have any questions or issues? Contact us using the details below.</p>
              <ul className={styles.contactMethods}>
                <li>
                  <i className="fas fa-map-marker-alt" /> {address}
                </li>
                <li>
                  <i className="fas fa-phone-alt" />
                  <a href={`tel:+1${phoneNumber.replace(/[\(\)\-\s]/g, '')}`}>{phoneNumber}</a>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h1>Who do I call?</h1>
              <p>Blah blah blah</p>
              <p>Blah blah blah, blah</p>
            </div>
          </div>
        </Section>

        <Section className={styles.contactForm}>
          <h1>Get in touch with us</h1>
          ++ FORM HERE ++
        </Section>
      </>
    </Layout>
  );
};

export default Contact;
