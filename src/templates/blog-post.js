import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import './blog-post.css';

export default ({
  data: { site, markdownRemark: blog },
  location: { pathname },
}) => {
  return (
    <Layout location={pathname}>
      <SEO
        title={blog.frontmatter.title}
        description={blog.frontmatter.description}
        slug={blog.fields.slug}
        keywords={blog.frontmatter.keywords}
      />
      <div className="blog-post">
        <h1 className="blog-post__title">{blog.frontmatter.title}</h1>
        <div className="blog-item__meta">
          <time>{blog.frontmatter.date}</time> <span>&bull;</span>{' '}
          {blog.timeToRead} {blog.timeToRead > 1 ? 'mins' : 'min'} read{' '}
          <span>&bull;</span> {blog.frontmatter.category}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div>
      <hr />
      <Bio />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        category
      }
      fields {
        slug
      }
    }
  }
`;
