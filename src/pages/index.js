import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['bassam', 'frontend', 'drupal', 'react']} />
    <Bio />
    <p>
      I’m a software engineer living in Kashmir. I work at{' '}
      <a href="https://www.axelerant.com" className="axelerant">
        Axelerant
      </a>{' '}
      as an Engineering Manager. In the past, I’ve worked with companies like{' '}
      <a href="https://www.acquia.com">Acquia</a> and{' '}
      <a href="https://www.pixoto.com">Pixoto</a>. I'm also an{' '}
      <a href="https://certification.acquia.com/user/1177954">
        Acquia Certified Drupal 8 Grand Master
      </a>
      .
    </p>

    <p>
      You can follow me on{' '}
      <a href="https://www.twitter.com/skippednote" className="twitter">
        Twitter
      </a>
      , see my code on{' '}
      <a href="https://www.github.com/skippednote" className="github">
        Github
      </a>
      , and find my PGP keys on{' '}
      <a href="https://keybase.io/skippednote">Keybase</a>.
    </p>

    <p>
      I like to blog occasionally and you can read it{' '}
      <Link to="/blog">here</Link>
    </p>

    <p>
      Feel free to drop me an email if you are an NGO or a local agency in need
      of help at <a href="mailto:contact@bassam.co">contact@bassam.co</a>
    </p>
  </Layout>
);

export default IndexPage;

export const indexQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
