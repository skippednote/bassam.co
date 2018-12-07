import React from 'react';
import Helmet from 'react-helmet';
import Service from '../components/service';
import Narrow from '../components/narrow';
import Paragraph from '../components/paragraph';
import Title from '../components/title';

const HirePage = () => (
  <div>
    <Helmet title={`Hire | Bassam Ismail`} />

    <Title>Hire</Title>
    <Narrow>
      <Service title="Consultation and Development">
        <Paragraph>
          I will help you by auditing your current workflow and reviewing the
          existing codebase. This would be followed up by a detailed document
          that would highlight all the areas of improvement and how you go about
          incorporating the suggested solutions.
        </Paragraph>

        <Paragraph>
          I can also help you with laying the foundation of your project,
          planning out the sprint zero, and development for the initial phase.
          I’m not a fan of diving into time constrained project where most of
          the time is spent bugs fixing.
        </Paragraph>
      </Service>

      <Service title="Workshop and Training">
        <Paragraph>
          I can help train your team members to be better front-end developers
          by running an in-house workshop or connecting with them remotely. This
          could be a workshop running for few days or recurring meeting with
          individual team members over an extended period.
        </Paragraph>

        <Paragraph>
          I primary focus these workshops on front-end technologies, Drupal,
          development workflow, Unix CLI, Git and Agile principles for
          developers.
        </Paragraph>
      </Service>

      <Service title="Speaking" footer={false}>
        <Paragraph>
          I have spoken at several international and local conferences and would
          be happy to speak at your event. This could be a public or private
          event. However, I strictly opt to speak only on topic I expertise in -
          front-end development, Drupal, and development workflow.
        </Paragraph>
      </Service>
    </Narrow>
  </div>
);

export default HirePage;
