import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'react-emotion';
import format from 'date-fns/format';
import Narrow from '../components/narrow';
import Title from '../components/title';
import Separator from '../components/separator';
import Share from '../components/share';

interface Props {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
    markdownRemark: {
      html: string;
      timeToRead: number;
      excerpt: string;
      frontmatter: {
        path: string;
        title: string;
        date: string;
        type: string;
        category: string;
      };
    };
  };
}

const Meta = styled('span')`
  text-align: center;
  margin-bottom: 3rem;
  display: inline-block;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 90%;
  }
`;

export default class Template extends React.Component<Props> {
  private io: IntersectionObserver;
  private nodeRef: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    share: false,
  };

  componentDidMount() {
    this.io = new IntersectionObserver(this.callback, {
      threshold: [0.1],
      root: null,
    });
    this.nodeRef.current && this.io.observe(this.nodeRef.current);
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.1) {
        this.setState({ share: true });
      } else {
        this.setState({ share: false });
      }
    });
  };

  render() {
    const {
      data: {
        markdownRemark: blog,
        site: { siteMetadata },
      },
    } = this.props;

    const location = `${siteMetadata.siteUrl}/blog.frontmatter.path`;

    return (
      <div>
        <Helmet
          title={`${blog.frontmatter.title} | Bassam Ismail`}
          meta={[
            // Twitter
            { name: 'twitter:title', content: blog.frontmatter.title },
            {
              name: 'twitter:description',
              content: blog.excerpt,
            },
          ]}
        />

        <Title clearBottom={true}>{blog.frontmatter.title}</Title>
        <Meta>
          {format(new Date(blog.frontmatter.date), 'MMMM DD, YYYY')}
          {'  '} &middot;{'  '}
          {blog.timeToRead} min{blog.timeToRead > 1 ? 's' : ''} read
          {blog.frontmatter.category && (
            <div>{blog.frontmatter.category.toUpperCase()}</div>
          )}
        </Meta>

        <Separator />

        <Narrow
          className={css`
            @media (min-width: 1130px) {
              margin-top: -100px;
            }
          `}
        >
          <Share
            active={this.state.share}
            title={blog.frontmatter.title}
            location={location}
          />
          <div
            ref={this.nodeRef}
            dangerouslySetInnerHTML={{ __html: blog.html }}
          />
        </Narrow>
      </div>
    );
  }
}

export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        path
        title
        date
        type
        category
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
