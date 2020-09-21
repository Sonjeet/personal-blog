import React, { FunctionComponent } from 'react';
import styles from './Blog.module.scss';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import { BlogNode } from '../../types';
import BlogHeading from '../../components/BlogHeading';

interface BlogData {
  site: {
    siteMetadata: { title: string };
  };
  allMdx: {
    edges: BlogNode[];
  };
}

const Blog: FunctionComponent<PageProps> = ({ location }) => {
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

  return (
    <Layout location={location.href ? location.href : ''} page="blog">
      <BlogHeading />
    </Layout>
  );
};

export default Blog;
