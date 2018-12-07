import React from 'react';
import Link from 'gatsby-link';
import { css } from 'react-emotion';

const Navigation = () => (
  <nav
    className={css`
      position: fixed;
      top: 0;
      width: 100%;
      padding: 1rem;
      background-color: white;
      z-index: 1;

      a {
        text-decoration: none;
        padding: 0 1rem;
        display: inline-block;

        @media (max-width: 768px) {
          padding: 0 0.5rem;
        }
      }
      .menu-active {
        color: #00c6ff;
      }
    `}
  >
    <Link to="/" exact={true} activeClassName="menu-active">
      Home
    </Link>
    <Link to="/til" activeClassName="menu-active">
      TIL
    </Link>
    <Link to="/newsletter" activeClassName="menu-active">
      Newsletter
    </Link>
    <Link to="/hire" activeClassName="menu-active">
      Hire
    </Link>
  </nav>
);

export default Navigation;
