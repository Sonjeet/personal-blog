import React, { FunctionComponent } from 'react';
import styles from './RecentBlogs.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from '../BlogCard';
import Anchor from '../Anchor';
import { BlogNode } from '../../types';
import Button from '../Button';
import NavLink from '../NavLink';

interface BlogData {
  site: {
    siteMetadata: { title: string };
  };
  allMarkdownRemark: {
    nodes: BlogNode[];
  };
}

const RecentBlogs: FunctionComponent = () => {
  const data: BlogData = useStaticQuery(graphql`
    query {
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
  `);

  // TODO: replace hardcoded data with graphql query
  const posts = data.allMarkdownRemark.nodes.slice(0, 3);

  return (
    <div className={styles.blogs}>
      <h2 className={styles.blogs__heading}>
        Recent Blog Posts
        <span role="img" aria-label="eyes">
          &#128064;
        </span>
      </h2>
      {posts.map((post) => (
        <div className={styles.blogs__card} key={post.frontmatter.path}>
          <BlogCard
            slug={post.frontmatter.path}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            intro={post.frontmatter.description}
          />
        </div>
      ))}
      <NavLink destination="/blog">
        <Button>Read More</Button>
      </NavLink>
    </div>
  );
};

export default RecentBlogs;
