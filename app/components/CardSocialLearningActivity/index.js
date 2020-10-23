/**
 *
 * CardSocialLearningActivity
 *
 */

import React, { memo } from 'react';
import { Card, Navbar, Nav } from 'react-bootstrap';

import UserChart from 'components/UserChart/Loadable';

function CardSocialLearningActivity() {
  return (
    <div>
      <h5 className="pl-2 py-2">How's your social learning activity?</h5>
      <div className="d-flex">
        <Card style={{ width: '100%', margin: '0px 10px', fontSize: '14px' }}>
          <Card.Body>
            <Navbar bg="white" variant="light">
              <Nav className="mr-auto">
                <Nav.Link href="#discussion">Discussion</Nav.Link>
                <Nav.Link href="#blog">Blog Post</Nav.Link>
                <Nav.Link href="#qna">Questions and Answers</Nav.Link>
              </Nav>
            </Navbar>
            <UserChart />
            <Card.Link href="#">
              <select
                id="days"
                className="text-secondary"
                style={{ border: '0' }}
              >
                <option value="7">Last 7 days</option>
                <option value="14">Last 14 days</option>
                <option value="30">Last 30 days</option>
              </select>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

CardSocialLearningActivity.propTypes = {};

export default memo(CardSocialLearningActivity);
