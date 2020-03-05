import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";
import styled from 'styled-components';
import SEO from "../components/seo";

import Layout from "../components/layout";
import BlogHeading from "../components/blog-heading";
import Heading from "../components/heading";
import NavLink from "../components/nav-link";
import HR from "../components/hr";

const BlogPostWrapper = styled.div`
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    * {
      font-size: 0.7rem;
    }
  }
`;

const BlogPostTemplate = (props) => {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  const headingStyle = {
    fontFamily: "var(--font-sans-serif)",
    color: "var(--blue-heading)",
    letterSpacing: "0.2rem"
  };

  const listStyle = {
    marginLeft: "1rem",
    fontSize: "0.8rem",
    color: "var(--blue-text)",
  };

  const components = {
    h1: props => <h1 {...props} style={headingStyle} />,
    h2: props => <h2 {...props} style={headingStyle} />,
    h3: props => <h3 {...props} style={headingStyle} />,
    h4: props => <h4 {...props} style={headingStyle} />,
    h5: props => <h5 {...props} style={headingStyle} />,
    h6: props => <h6 {...props} style={headingStyle} />,
    p: props => (
      <p
        {...props}
        style={{
          fontSize: "0.9rem",
          color: "var(--blue-text)",
        }}
      />
    ),
    ul: props => <ul {...props} style={listStyle} />,
    ol: props => <ol {...props} style={listStyle} />,
    blockquote: props => (
      <blockquote {...props} style={{ marginLeft: "1rem" }} />
    ),
  };

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogHeading />
      <BlogPostWrapper>
        <HR />
        <Heading size={1} weight={900} margin="0 0 0.5rem 0">
          {post.frontmatter.title}
        </Heading>
        <Heading margin="0 0 2rem 0" size={4} weight={400}>
          {post.frontmatter.date}
        </Heading>
        <HR />
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <HR />
        <ButtonsWrapper>
          {previous && (
            <NavLink left to={`/blog${previous.fields.slug}`}>
              <span style={{marginRight: '0.2rem'}}>&larr;</span>
              {previous.frontmatter.title}
            </NavLink>
          )}
          {next && (
            <NavLink right to={`/blog${next.fields.slug}`}>
              {next.frontmatter.title}
              <span style={{marginLeft: '0.2rem'}}>&rarr;</span>
            </NavLink>
          )}
        </ButtonsWrapper>
      </BlogPostWrapper>
    </Layout>
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;