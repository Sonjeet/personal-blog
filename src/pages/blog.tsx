import React, { FunctionComponent } from 'react';
import styles from './blog.module.scss';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { BlogNode } from '../types';
import BlogHeading from '../components/BlogHeading';

interface DataProps {
  allMarkdownRemark: {
    nodes: BlogNode[];
  };
}

const Blog: FunctionComponent<PageProps<DataProps>> = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout page="blogs">
      <BlogHeading />
      <div className={styles.blogs}>
        {nodes.map((blogNode) => (
          <div className={styles.blogs__card} key={blogNode.frontmatter.path}>
            <BlogCard
              slug={blogNode.frontmatter.path}
              title={blogNode.frontmatter.title}
              date={blogNode.frontmatter.date}
              intro={blogNode.frontmatter.description}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        html
        frontmatter {
          date(formatString: "DD MMM, YYYY")
          description
          path
          title
        }
      }
    }
  }
`;
