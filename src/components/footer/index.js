import React from 'react';
import { Link } from 'gatsby';
import './index.css';

const Footer = () => (
  <footer className="footer">
    &copy; Bassam Ismail &mdash; 2018
    <br />
    <Link to="/rss.xml">rss</Link> &middot;{' '}
    <a href="https://www.twitter.com/skippednote">twitter</a> &middot;{' '}
    <a href="https://www.github.com/skippednote">github</a> &middot;{' '}
    <a href="mailto:contact@bassam.co">mail</a>
  </footer>
);

export default Footer;
