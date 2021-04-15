import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Layout } from '../layout/Layout';
import data from '../data/whoToCall.json';

import * as styles from './scss/contact.module.scss';

const ContactFormSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  emailAddress: Yup.string().email().required('Email Address is required'),
  message: Yup.string().required('Please enter a message to send to the Shawtown Neighborhood Association')
});

type ContactForm = Yup.InferType<typeof ContactFormSchema> & {
  phoneNumber?: string;
};

function getRandom(arr: Array<unknown>, n: number): any[] {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len) throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

type Issue = {
  name: string;
  government?: string;
  number: string;
  issue: string;
};

const Contact: React.FC = (props: any) => {
  const address = '1415 Menomonie Street, Eau Claire, WI 54703';
  const phoneNumber = '(715) 222-1111';
  const emailAddress = 'info@shawtown.org';
  const initialValues: ContactForm = {
    name: '',
    emailAddress: '',
    message: ''
  };

  const [buttonTitle, setButtonTitle] = useState<string>('Send Message');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [randomIssues, setRandomIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const issues: Issue[] = data.flatMap(agency =>
      agency.issues.map(issue => {
        return {
          name: agency.name,
          government: agency.government,
          number: agency.number,
          issue
        };
      })
    );

    setRandomIssues(getRandom(issues, 3));
  }, []);
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
              <p>
                Do you have a question or have an issue? In many cases, the Neighborhood Association recommends
                contacting the proper munincipality.
              </p>
              <ul className={styles.issueList}>
                {randomIssues.map((issue, index) => (
                  <li key={index}>
                    <div>
                      <h2>{issue.issue}</h2>
                      <dl>
                        <dt>Agency:</dt>
                        <dd>
                          {issue.government} - {issue.name}
                        </dd>
                      </dl>
                      <dl>
                        <dt>Phone Number:</dt>
                        <dd>{issue.number}</dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <button>See more</button>
            </div>
          </div>
        </Section>

        <Section className={styles.contactForm}>
          <h1>Get in touch with us</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              axios.post('https://en154f8kknfmsi4.m.pipedream.net', values);
              actions.resetForm();
              setButtonTitle('Message sent...');
            }}
            validationSchema={ContactFormSchema}
            validate={values => {
              ContactFormSchema.isValid(values).then(isValid => setButtonDisabled(!isValid));
            }}>
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name *"
                  className={errors.name && touched.name && styles.invalid}
                />

                <label htmlFor="emailAddress">Email</label>
                <Field
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email *"
                  className={errors.emailAddress && touched.emailAddress && styles.invalid}
                />

                <label htmlFor="phoneNumber">Phone</label>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone"
                  className={errors.phoneNumber && touched.phoneNumber && styles.invalid}
                />

                <label htmlFor="message">Message</label>
                <Field
                  id="message"
                  name="message"
                  placeholder="Message *"
                  as="textarea"
                  className={errors.message && touched.message && styles.invalid}
                />

                <button type="submit" disabled={buttonDisabled}>
                  {buttonTitle}
                </button>
              </Form>
            )}
          </Formik>
        </Section>
      </>
    </Layout>
  );
};

export default Contact;
