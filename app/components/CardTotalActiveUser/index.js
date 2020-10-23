/**
 *
 * CardTotalActiveUser
 *
 */

import React, { memo } from 'react';
import { Card, Table, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';

import LineChart from 'components/LineChart/Loadable';
import UserChart from 'components/UserChart/Loadable';

function CardTotalActiveUser() {
  const getData = axios
    .get(`https://covid19.mathdro.id/api/countries/ID`)
    .then(res => {
      console.log('getData');
      console.log(getData);
    });

  return (
    <div className="d-flex pb-3">
      <Card style={{ width: '75%', margin: '0px 10px', fontSize: '14px' }}>
        <Card.Body>
          <Navbar bg="white" variant="light">
            <Nav className="mr-auto">
              <Nav.Link href="#1">
                Users
                <h4>XXX</h4>
              </Nav.Link>
              <Nav.Link href="#2">
                Course Completed
                <h4>XXX</h4>
              </Nav.Link>
              <Nav.Link href="#3">
                Learning Plan Completed
                <h4>XXX</h4>
              </Nav.Link>
              <Nav.Link href="#4">
                Learning Hour
                <h4>XXX</h4>
              </Nav.Link>
            </Nav>
          </Navbar>
          <LineChart />
          <Card.Link href="#">
            <select
              id="days"
              className="text-secondary"
              style={{ border: '0' }}
            >
              ><option value="7">Last 7 days</option>
              <option value="14">Last 14 days</option>
              <option value="30">Last 30 days</option>
            </select>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        className="bg-primary text-white"
        style={{ width: '25%', margin: '0px 10px', fontSize: '14px' }}
      >
        <Card.Body>
          <Card.Title>
            Active Users right now
            <h2>XXX</h2>
          </Card.Title>
          <label>Page views pe minute</label>
          <UserChart />
          <Table size="sm" className="text-white">
            <thead>
              <tr>
                <th>Top Active Page</th>
                <th className="text-right">Active Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>confirmed</td>
                <td className="text-right">XXX</td>
              </tr>
              <tr>
                <td>recovered</td>
                <td className="text-right">XXX</td>
              </tr>
              <tr>
                <td>deaths</td>
                <td className="text-right">XXX</td>
              </tr>
            </tbody>
          </Table>
          <Card.Link href="#" className="float-right text-white">
            REAL-TIME REPORT &#8250;
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

CardTotalActiveUser.propTypes = {};

export default memo(CardTotalActiveUser);
