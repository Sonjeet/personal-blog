import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Heading from "../heading";
import Card from "../card";

const RecentBlogs = () => {
    const dummy = [
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. ",
      },
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. ",
      },
      {
        title: "one of my blogs",
        date: new Date().toISOString(),
        intro:
          "this is the start of a blog post. i developed it in gatsby etc. ",
      },
    ]

    return (
        <>
            <Heading
                margin="0 0 1.2rem 0"
                size={2}
                weight={500}
                >Recent Blogs</Heading>
            {
                dummy.map(blog => (
                    <Card 
                        title={blog.title}
                        date={blog.date}
                        intro={blog.intro}
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