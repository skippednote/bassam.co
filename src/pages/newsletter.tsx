import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import NewsletterForm from '../components/newsletterform';
import Narrow from '../components/narrow';
import Title from '../components/title';
import Paragraph from '../components/paragraph';
import List from '../components/list';

const NewsletterPage = () => (
  <div>
    <Helmet title={`Newsletter | Bassam Ismail`} />

    <Title>Newsletter</Title>
    <Narrow>
      <Paragraph leading={true}>
        I've been using my current blog and Twitter as a medium to share
        interesting content I find on the internet or that I compose myself.
        However, it's difficult to keep up with the stream of content on Twitter
        and I'd rather use my blog just for the content that I write.
      </Paragraph>

      <NewsletterForm />

      <strong>With this newsletter:</strong>
      <List>
        <li>
          I'll be sharing content every week over the weekend (Indian Standard
          Time).
        </li>
        <li>
          The content would be primarily related to JavaScript, Drupal, frontend
          development, and personal development.
        </li>
        <li>
          The content can be in any form: links to blog posts, tweets, videos,
          snippets of code, etc.
        </li>
        <li
          className={css`
            color: #9b2dff;
          `}
        >
          I'll make you a promise to always share quality content and keep your
          subscription details safe just for sending this newsletter.
        </li>
      </List>
    </Narrow>
  </div>
);

export default NewsletterPage;
