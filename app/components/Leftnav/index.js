/**
 *
 * Leftnav
 *
 */

import React, { memo } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Leftnav() {
  return (
    <div className="w-25 border-right bg-white">
      <Navbar bg="white" expand="lg">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/" className="m-1">
            <b>HOME</b>
          </Nav.Link>

          <Nav.Link eventKey="link-1" className="m-1">
            <b>LEARNING</b>
          </Nav.Link>
          <Nav.Link eventKey="link-1a" className="m-1">
            <i className="fa fa-circle mx-2" />
            Courses
          </Nav.Link>
          <Nav.Link eventKey="link-1b" className="m-1">
            <i className="fa fa-circle mx-2" />
            Learning plans
          </Nav.Link>

          <Nav.Link eventKey="link-2" className="m-1">
            <b>MANAGE</b>
          </Nav.Link>
          <Nav.Link eventKey="link-2a" className="m-1">
            <i className="fa fa-circle mx-2" />
            Users
          </Nav.Link>
          <Nav.Link eventKey="link-2b" className="m-1">
            <i className="fa fa-circle mx-2" />
            Skills
          </Nav.Link>
          <Nav.Link eventKey="link-2c" className="m-1">
            <i className="fa fa-circle mx-2" />
            Reports
          </Nav.Link>
          <Nav.Link eventKey="link-2d" className="m-1">
            <i className="fa fa-circle mx-2" />
            Analytics
          </Nav.Link>
          <Nav.Link eventKey="link-2e" className="m-1">
            <i className="fa fa-circle mx-2" />
            Announcements
          </Nav.Link>

          <Nav.Link eventKey="link-3" className="m-1">
            <b>CONFIGURE</b>
          </Nav.Link>
          <Nav.Link eventKey="link-3a" className="m-1">
            <i className="fa fa-circle mx-2" />
            Points
          </Nav.Link>
          <Nav.Link eventKey="link-3b" className="m-1">
            <i className="fa fa-circle mx-2" />
            Reward
          </Nav.Link>
          <Nav.Link eventKey="link-3c" className="m-1">
            <i className="fa fa-circle mx-2" />
            Email templates
          </Nav.Link>
          <Nav.Link eventKey="link-3d" className="m-1">
            <i className="fa fa-circle mx-2" />
            Company info
          </Nav.Link>
          <Nav.Link eventKey="link-3e" className="m-1">
            <i className="fa fa-circle mx-2" />
            Billing
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

Leftnav.propTypes = {};

export default memo(Leftnav);
