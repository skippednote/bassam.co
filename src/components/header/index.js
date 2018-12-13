import { Link } from 'gatsby';
import React from 'react';
import './index.css';

const blogDetailRegex = /\/blog\/./;

const Header = ({ siteTitle, location }) => (
  <header className="header">
    {location && blogDetailRegex.test(location) ? (
      <h3 className="site-title title-page">
        <Link to="/">Hi, I'm {siteTitle}</Link>
      </h3>
    ) : (
      <h1 className="site-title title-home">
        <Link to="/">Hi, I'm {siteTitle}</Link>
      </h1>
    )}
  </header>
);

export default Header;
