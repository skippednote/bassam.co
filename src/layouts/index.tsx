import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import Footer from '../components/footer';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Shape from '../components/shape';
import Wrapper from '../components/wrapper';

import './syntax.styles';
import './index.styles';

interface Data {
  children(): JSX.Element;
  data: {
    site: {
      siteMetadata: {
        title: string;
        copyrights: string;
      };
    };
  };
}

const Layout: React.SFC<Data> = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bassam Ismail' },
        {
          name: 'keywords',
          content: 'frontend development, JavaScript, Drupal, React',
        },
        { name: 'theme-color', content: '#a8fd78 ' },
        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@skippednote' },
        { name: 'twitter:creator', content: '@skippednote' },
        {
          name: 'twitter:image',
          content: '/images/android-chrome-512x512.png',
        },
        { name: 'twitter:title', content: 'Bassam Ismail' },
        {
          name: 'twitter:description',
          content: 'Design and Engineering by Bassam Ismail.',
        },
      ]}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          href: `/images/favicon.ico`,
        },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <Navigation />
    <Header siteTitle={data.site.siteMetadata.title} />

    <main>
      <Shape />
      <Wrapper>
        <div
          className={css`
            ul {
              padding-left: 1.5rem;
            }
            li {
              margin-bottom: 1.5rem;
            }
          `}
        >
          {children()}
        </div>
        <Footer copyrights={data.site.siteMetadata.copyrights} />
      </Wrapper>
    </main>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        copyrights
      }
    }
  }
`;
