import React from 'react';
import * as Survey from 'survey-react';
import { Section } from '../components/Section';
import Layout from '../layout/Layout';

import 'survey-react/survey.css';
import 'survey-react/modern.css';
import './Survey.module.scss';

export default function SurveyTemplate(props: any) {
  const { pageContext } = props;

  const surveyJson = {
    surveyId: pageContext.surveyId,
    surveyPostId: pageContext.surveyPostId
  };

  if (typeof window !== `undefined`) {
    Survey.StylesManager.applyTheme('bootstrap');
  }

  return (
    <Layout title="Survey" description="">
      <Section>
        <h1>{pageContext.surveyType}</h1>
        <h2>{pageContext.surveyName}</h2>
      </Section>
      <Section>{typeof window !== `undefined` && <Survey.Survey json={surveyJson} />}</Section>
    </Layout>
  );
}
