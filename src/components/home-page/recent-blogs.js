import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Heading from "../heading";
import Card from "../card";

const RecentBlogs = () => {
    const dummy = [
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. and this should become ellipsis",
      },
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. and this should become ellipsis",
      },
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. and this should become ellipsis",
      },
    ]

    const data = useStaticQuery(graphql`
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
    `);

    const posts = data.allMdx.edges.slice(0, 3);

    return (
        <>
            <Heading
                margin="0 0 1.2rem 0"
                size={2}
                weight={500}
                >Recent Blog Posts</Heading>
            {
                posts.map(post => (
                    <Card
                        key={post.node.fields.slug}
                        title={post.node.frontmatter.title}
                        date={post.node.frontmatter.date}
                        intro={post.node.excerpt}
                    />
                ))
            }
            <Link to="/blog" style={{
                fontFamily: 'var(--font-sans-serif)',
                color: 'var(--blue-text)',
                fontWeight: 700,
                textDecoration: 'none',
            }}>
                Read More
            </Link>
        </>
    );
};

export default RecentBlogs;