import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PageTitle from '../components/page-title';
import './blog.css';

const BlogPage = ({
  location: { pathname },
  data: {
    allMarkdownRemark: { edges: blogs },
  },
}) => (
  <Layout location={pathname}>
    <SEO
      title="Blog"
      keywords={['bassam', 'frontend', 'drupal', 'react', 'blog']}
    />
    <PageTitle>Blog</PageTitle>
    {blogs.map(({ node: blog }) => (
      <div className="blog-item" key={blog.id}>
        <h3 className="blog-item__title">
          <Link to={blog.fields.slug}>{blog.frontmatter.title}</Link>
        </h3>
        <div className="blog-item__meta">
          <time>{blog.frontmatter.date}</time> &bull; {blog.timeToRead}{' '}
          {blog.timeToRead > 1 ? 'mins' : 'min'} read
        </div>
        <p className="blog-item__description">{blog.frontmatter.description}</p>
      </div>
    ))}
    <hr />
    <Bio />
  </Layout>
);

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
