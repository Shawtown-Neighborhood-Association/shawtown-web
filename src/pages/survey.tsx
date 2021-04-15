import React, { useEffect } from 'react';
import * as Survey from 'survey-react';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

import 'survey-react/survey.css';
import 'survey-react/modern.css';
import './scss/survey.module.scss';

const SurveyPage: React.FC = () => {
  const surveyJson = {
    surveyId: 'f765e7c3-1d2c-496f-a8c0-1a7eee1c8457',
    surveyPostId: '0a025b13-ed3f-4714-9d3b-118816d25a87'
  };

  if (typeof window !== `undefined`) {
    Survey.StylesManager.applyTheme('bootstrap');
  }

  return (
    <Layout title="Survey" description="">
      <>
        <Section>
          <>
            <h1>Take our fancy Survey</h1>
          </>
        </Section>
        <Section>{typeof window !== `undefined` && <Survey.Survey json={surveyJson} />}</Section>
      </>
    </Layout>
  );
};

export default SurveyPage;
