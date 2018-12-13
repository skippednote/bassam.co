import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './index.css';

import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="layout">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
);

export default Layout;
