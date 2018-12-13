import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';
import './index.css';

const Layout = ({ children, location }) => (
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
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
          />
          <div>{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
);

export default Layout;
