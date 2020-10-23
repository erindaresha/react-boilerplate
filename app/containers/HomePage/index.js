/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';

import CardTotalActiveUser from 'components/CardTotalActiveUser/Loadable';
import CardCoursesVisitAndMostActiveUser from 'components/CardCoursesVisitAndMostAvtiveUser/Loadable';
import CardSocialLearningActivity from 'components/CardSocialLearningActivity/Loadable';

export default function HomePage() {
  return (
    <div className="w-100">
      <Container fluid className="p-4 bg-light">
        <h5 className="pl-2 py-2">Codemi Home</h5>
        <CardTotalActiveUser />

        <CardCoursesVisitAndMostActiveUser />

        <CardSocialLearningActivity />
      </Container>
    </div>
  );
}
