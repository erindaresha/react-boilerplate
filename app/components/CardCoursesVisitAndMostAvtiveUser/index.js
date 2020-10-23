/**
 *
 * CardCoursesVisitAndMostAvtiveUser
 *
 */

import React, { memo } from 'react';
import { Card, Table } from 'react-bootstrap';

function CardCoursesVisitAndMostAvtiveUser() {
  return (
    <div>
      <div className="d-flex py-2">
        <h5 className="pl-2 w-50">What courses do your users visit?</h5>
        <h5 className="pl-2 w-50">Who is your most active user?</h5>
      </div>
      <div className="d-flex pb-3">
        <Card style={{ width: '50%', margin: '0px 10px', fontSize: '14px' }}>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Courses</th>
                  <th className="text-right">Completed</th>
                  <th className="text-right">Completion %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table cell1</td>
                  <td className="text-right">Table cell1</td>
                  <td className="text-right">Table cell1</td>
                </tr>
                <tr>
                  <td>Table cell2</td>
                  <td className="text-right">Table cell2</td>
                  <td className="text-right">Table cell2</td>
                </tr>
              </tbody>
            </Table>
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
            <Card.Link href="#" className="float-right text-success">
              COURSE REPORT &#8250;
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '50%', margin: '0px 10px', fontSize: '14px' }}>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Users</th>
                  <th className="text-right">Completed</th>
                  <th className="text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table cell1</td>
                  <td className="text-right">Table cell1</td>
                  <td className="text-right">Table cell1</td>
                </tr>
                <tr>
                  <td>Table cell2</td>
                  <td className="text-right">Table cell2</td>
                  <td className="text-right">Table cell2</td>
                </tr>
              </tbody>
            </Table>
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
            <Card.Link href="#" className="float-right text-success">
              COURSE REPORT &#8250;
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

CardCoursesVisitAndMostAvtiveUser.propTypes = {};

export default memo(CardCoursesVisitAndMostAvtiveUser);
