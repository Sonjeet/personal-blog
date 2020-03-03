import React from "react"
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";

import Layout from "../components/layout";
import Button from "../components/button";
import BlogHeading from "../components/blog-heading";
import Card from "../components/card";

const BlogsWrapper = styled.div`
  min-width: calc(var(--h-unit) * 8);
  max-width: calc(var(--h-unit) * 8);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem auto 0 auto;

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  max-width: calc(50% - 10px);

  @media (max-width: 1200px) {
    min-width: 100%;
    max-width: 100%;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: calc(var(--v-unit) / 2);
`;

const Blog = (props) => {
  const { data, location } = props;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <BlogHeading />
      <BlogsWrapper>
        {posts.map(post => (
          <CardWrapper key={post.node.fields.slug}>
            <Card
              slug={post.node.fields.slug}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              intro={post.node.excerpt}
            />
          </CardWrapper>
        ))}
      </BlogsWrapper>
      <ButtonWrapper>
        <Link style={{boxShadow: 'none'}} to="/">
          <Button marginTop="85px">Home</Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  )
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
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
