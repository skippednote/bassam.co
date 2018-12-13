import { Link } from 'gatsby';
import React from 'react';
import './index.css';

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="site-title">
      <Link to="/">Hi, I'm {siteTitle}</Link>
    </h1>
  </header>
);

export default Header;
