import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import Narrow from '../components/narrow';
import SiteTitle from '../components/sitetitle';
import Paragraph from '../components/paragraph';

const NewsletterPage = () => (
  <div>
    <Helmet title={`Newsletter | Bassam Ismail`} />

    <SiteTitle
      className={css`
        padding-top: 0.25rem;
      `}
    >
      4-Oh-4
    </SiteTitle>
    <Narrow>
      <Paragraph leading={true}>
        These aren't the <del>droids</del> pages you're looking for!
      </Paragraph>
    </Narrow>
  </div>
);

export default NewsletterPage;
