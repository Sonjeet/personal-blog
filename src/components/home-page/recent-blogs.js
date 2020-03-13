import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';

import Heading from "../heading";
import Card from "../card";
import Button from "../button";

const Wrapper = styled.div`
    @media(max-width: 700px) {
        h2 {
            font-size: 1.8em;
        }
    }

    @media (max-width: 500px) {
        h2 {
            font-size: 1.2em;
        }
    }
`;

const RecentBlogs = () => {
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
        <Wrapper>
            <Heading
                margin="0 0 1.2rem 0"
                size={2}
                weight={500}
                >Recent Blog Posts <span role="img" aria-label="eyes">&#128064;</span></Heading>
            {
                posts.map(post => (
                    <Card
                        key={post.node.fields.slug}
                        slug={post.node.fields.slug}
                        title={post.node.frontmatter.title}
                        date={post.node.frontmatter.date}
                        intro={post.node.frontmatter.description}
                    />
                ))
            }
            <Link to="/blog" style={{
                fontFamily: 'var(--font-sans-serif)',
                color: 'var(--blue-text)',
                fontWeight: 700,
                boxShadow: 'none'
            }}>
                <Button>Read More</Button>
            </Link>
        </Wrapper>
    );
};

export default RecentBlogs;