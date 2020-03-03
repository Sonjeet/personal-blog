import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";
import styled from 'styled-components';
import SEO from "../components/seo";

import Bio from "../components/bio";
import Layout from "../components/layout";
import { rhythm, scale } from "../utils/typography";
import BlogHeading from "../components/blog-heading";
import Heading from "../components/heading";

const BlogPostWrapper = styled.div`
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  margin-left: auto;
  margin-right: auto;
`;

const BlogPostTemplate = (props) => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogHeading />
      <BlogPostWrapper>
        <Heading size={1} weight={900} margin="0 0 0.5rem 0">
          {post.frontmatter.title}
        </Heading>
        <Heading margin="0 0 2rem 0" size={4} weight={400}>
          {post.frontmatter.date}
        </Heading>
        <MDXProvider
          components={{
            h1: props => (
              <h1
                {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            h2: props => (
              <h2
                {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            h3: props => (
              <h3
                {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            h4: props => (
              <h4
                {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            h5: props => (
              <h5 {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            h6: props => (
              <h6
                {...props}
                style={{
                  fontFamily: "var(--font-sans-serif)",
                  color: "var(--blue-text)",
                }}
              />
            ),
            p: props => (
              <p
                {...props}
                style={{
                  textAlign: "justify",
                  fontSize: "0.9rem",
                  color: "var(--blue-text)",
                }}
              />
            ),
            ul: props => <ul {...props} style={{ marginLeft: "1rem", fontSize: "0.8rem", color: "var(--blue-text)" }} />,
            ol: props => <ol {...props} style={{ marginLeft: "1rem", fontSize: "0.8rem", color: "var(--blue-text)" }} />,
            blockquote: props => (
              <blockquote {...props} style={{ marginLeft: "1rem" }} />
            ),
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </BlogPostWrapper>
      {/* <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul> */}
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