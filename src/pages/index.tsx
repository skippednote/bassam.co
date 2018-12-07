import React from 'react';
import Narrow from '../components/narrow';
import Paragraph from '../components/paragraph';
import Title from '../components/title';

const IndexPage = () => (
  <div>
    <Title>About</Title>
    <Narrow>
      <Paragraph leading={true}>
        I’m a full stack web developer and speaker based in Kashmir. I work at{' '}
        <a href="https://www.axelerant.com">Axelerant</a> as a Technical
        Architect. In the past, I’ve worked with companies like{' '}
        <a href="https://www.acquia.com">Acquia</a> and{' '}
        <a href="https://www.pixoto.com/">Pixoto</a>. I spend most of my day
        working with JavaScript and Drupal, sometimes this also means teaching
        my fellow developers. I'm a big fan of my family, Drupal, and JavaScript
        with its surrounding ecosystem. I'm also an{' '}
        <a href="https://certification.acquia.com/registry/grand-masters?fname=Bassam&lname=Ismail&city=&state=&country=&org=&cred=All">
          Acquia Certified Drupal 8 Grand Master
        </a>.
      </Paragraph>
    </Narrow>

    <Paragraph>
      <img src="/images/banner.jpg" alt="Bassam Ismail" />
    </Paragraph>

    <Narrow>
      <Paragraph>
        I strive to build responsive, highly performant and pleasing user
        experiences for everyone. This is done by marrying modern technologies
        with accessible design.
      </Paragraph>
      <Paragraph>
        When not working with clients I like to read comics, cook with my wife,
        and build applications to automate my workflow.
      </Paragraph>
    </Narrow>
  </div>
);

export default IndexPage;
