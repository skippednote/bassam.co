import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import Narrow from '../components/narrow';
import Title from '../components/title';
import List from '../components/list';
import format from 'date-fns/format';

interface Post {
  node: {
    id: string;
    frontmatter: {
      title: string;
      path: string;
      date: string;
    };
  };
}

interface Data {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
}

const TILPage: React.SFC<Data> = ({
  data: {
    allMarkdownRemark: { edges: til },
  },
}) => {
  return (
    <div>
      <Helmet title={`TIL | Bassam Ismail`} />
      <Title>Today I Learned</Title>
      <Narrow>
        <List plain={true}>
          {til.map(({ node: { frontmatter, id } }) => (
            <li key={id}>
              <h3>
                <Link to={`${frontmatter.path}`}>{frontmatter.title}</Link>
              </h3>
              <div
                className={css`
                  font-size: 80%;
                  opacity: 0.6;
                `}
              >
                {format(new Date(frontmatter.date), 'MMMM DD, YYYY')}
              </div>
            </li>
          ))}
        </List>
        <Link
          to="blog"
          className={css`
            text-decoration: none;
            text-align: center;
            display: block;
            border-top: 1px solid #afa0fe;
            padding-top: 1rem;
            width: 50%;
            margin: 5rem auto 0;
          `}
        >
          Archived Blog
        </Link>
      </Narrow>
    </div>
  );
};

export default TILPage;

export const blogQuery = graphql`
  query TILQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "til" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            type
          }
        }
      }
    }
  }
`;
