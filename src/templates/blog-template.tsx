import React, { FunctionComponent } from 'react';
import styles from './blog-template.module.scss';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import NavLink from '../components/NavLink';
import { BlogNode } from '../types';
import BlogHeading from '../components/BlogHeading';

interface BlogTemplateProps {
  data: {
    markdownRemark: BlogNode;
  };
  pageContext: {
    next: BlogNode;
    previous: BlogNode;
  };
}

const BlogTemplate: FunctionComponent<BlogTemplateProps> = (props) => {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;
  const { next, previous } = props.pageContext;

  return (
    <Layout page="blog-post">
      <BlogHeading />
      <div className={styles.blog}>
        <hr
          className={`${styles['blog__slantedruleDownwards']} ${styles.blog__slantedrule}`}
        />
        <h1>{frontmatter.description}</h1>
        <h4>{frontmatter.date}</h4>
        <hr
          className={`${styles['blog__slantedruleUpwards']} ${styles.blog__slantedrule}`}
        />
        <div
          className={styles.blog__post}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className={styles.blog__navigation}>
          {previous && (
            <NavLink destination={`/${previous.frontmatter.path}`}>
              <span className={styles['blog__navigationLarr']}>&larr;</span>
              {previous.frontmatter.title}
            </NavLink>
          )}
          {next && (
            <NavLink destination={`/${next.frontmatter.path}`}>
              {next.frontmatter.title}
              <span className={styles['blog__navigationRarr']}>&rarr;</span>
            </NavLink>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplate;

// TODO: check out if we need the excerpt to inject into our SEO component
export const pageQuery = graphql`
  query BlogPostBySlug($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        path
        description
        title
      }
      html
    }
  }
`;
