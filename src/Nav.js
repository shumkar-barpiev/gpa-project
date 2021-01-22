import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <div >
    <div className="topnav">
    <Link to='/Homepage'>
    <li>Home Page</li>
    </Link>
    <Link to='/Calculate'>
      <li>Calculate GPA</li>
      </Link>
    <Link to='/About'>
      <li>About Manas</li>
    </Link>
    </div>
    </div>
  );
}

export default Nav;
