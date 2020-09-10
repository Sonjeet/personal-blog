import React, { FunctionComponent } from 'react';
import styles from './RecentBlogs.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from '../BlogCard';
import Anchor from '../Anchor';
import { BlogNode } from '../../types';

interface BlogData {
  site: {
    siteMetadata: { title: string };
  };
  allMdx: {
    edges: BlogNode[];
  };
}

const RecentBlogs: FunctionComponent = () => {
  //const data = useStaticQuery(graphql`
  //query {
  //site {
  //siteMetadata {
  //title
  //}
  //}
  //allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
  //edges {
  //node {
  //excerpt
  //fields {
  //slug
  //}
  //frontmatter {
  //date(formatString: "MMMM DD, YYYY")
  //title
  //description
  //}
  //}
  //}
  //}
  //}
  //`);

  const data: BlogData = {
    site: {
      siteMetadata: {
        title: 'Dev Blog',
      },
    },
    allMdx: {
      edges: [
        {
          node: {
            excerpt:
              "TLDR; There's too much tech that excites me. I've finally decided to start eliminating tech that won't provide me with a significant…",
            fields: {
              slug: '/technologies-im-learning-in-2020/',
            },
            frontmatter: {
              date: 'April 17, 2020',
              title: "Technologies I'm Learning in 2020",
              description: 'So much tech. Which ones to learn?',
            },
          },
        },
        {
          node: {
            excerpt:
              'Setting The Scene For some reason whenever I have very little to do in my schedule, I just seem to take forever to accomplish my tasks. It…',
            fields: {
              slug: '/how-i-stopped-procrastinating-kind-of/',
            },
            frontmatter: {
              date: 'April 10, 2020',
              title: 'How I Stopped Procrastinating (kind of)',
              description: 'I wish I knew why this works for me',
            },
          },
        },
        {
          node: {
            excerpt:
              "JAMWhat? JAMStack. It's yet another thing that's trending in the web development ecosystem and so I started to look into it. When I first…",
            fields: {
              slug: '/jamstack-for-your-next-project/',
            },
            frontmatter: {
              date: 'March 22, 2020',
              title: 'JAMStack for your next project?',
              description: 'Should you use JAMStack for your next project?',
            },
          },
        },
      ],
    },
  };
  // TODO: replace hardcoded data with graphql query
  const posts = data.allMdx.edges.slice(0, 3);

  return (
    <div className={styles.blogs}>
      <h2 className={styles.blogs__heading}>
        Recent Blog Posts
        <span role="img" aria-label="eyes">
          &#128064;
        </span>
      </h2>
      {posts.map(post => (
        <BlogCard
          key={post.node.fields.slug}
          slug={post.node.fields.slug}
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          intro={post.node.frontmatter.description}
        />
      ))}
    </div>
  );
};

export default RecentBlogs;
