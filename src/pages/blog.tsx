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

const BlogPage: React.SFC<Data> = ({
  data: {
    allMarkdownRemark: { edges: blogs },
  },
}) => {
  return (
    <div>
      <Helmet title={`Blog | Bassam Ismail`} />

      <Title>Blog</Title>
      <Narrow>
        <List plain={true}>
          {blogs.map(({ node: { frontmatter, id } }) => (
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
      </Narrow>
    </div>
  );
};

export default BlogPage;

export const blogQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;
