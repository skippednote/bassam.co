import React from 'react';
import { css } from 'react-emotion';
import SiteTitle from './sitetitle';

const Header: React.SFC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header
    className={css`
      height: 35vh;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: -1;
    `}
  >
    <div
      className={css`
        display: inline-block;
      `}
    >
      <SiteTitle>{siteTitle}</SiteTitle>
      <span
        className={css`
          display: inline-block;
          margin-top: 1rem;
          font-size: 120%;

          @media (max-width: 768px) {
            font-size: 100%;
            margin-top: 1rem;
            display: inline-block;
          }
        `}
      >
        Design and Engineering
      </span>
    </div>
  </header>
);

export default Header;
