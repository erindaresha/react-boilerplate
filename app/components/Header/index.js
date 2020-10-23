/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { Image } from 'react-bootstrap';
import photo from '../../images/starrynight.jpg';
import logo from '../../images/codemi.png';

function Header() {
  return (
    <div className="p-2 bg-white border-bottom d-flex justify-content-between">
      <img src={logo} height="50" className="p-2" />
      <div className="my-auto">
        <a href="" className="text-secondary pr-4">
          <i className="fa fa-bell" />
        </a>
        <img src={photo} width="40" height="40" className="rounded-circle" />
        <a href="" className="text-secondary pr-3 pl-2">
          <i className="fa fa-angle-down" />
        </a>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
