import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

import Navbar from "../components/navbar";

const Layout = (props) => {
  const { children } = props;
  // const { location, title, children } = props
  // const rootPath = `${__PATH_PREFIX__}/`
  // const blogPath = `${__PATH_PREFIX__}/blog/`
  // let header

  console.log('inside the functional component')

  // if (location.pathname === rootPath || location.pathname === blogPath) {
  //   // this represents the title, we wouldn't want this for our design
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={location.pathname === blogPath ? `/blog/` : `/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   console.log("rendering the h3 and the title is ", title)
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/blog/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // } 

  return (
    <Wrapper>
      <Navbar />
      {/* 
          this is where we'd want to specify our contents for a layout component
          <intro>
          <technologies>
          .....
          <latest blogs>
         */}

         {/* maybe need to change div to specify margins should have --horizontal-spacing instead of auto */}
      <div
        style={{
          marginLeft: 'var(--horizontal-spacing)',
          marginRight: 'var(--horizontal-spacing)',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer>
      {/* TODO: consider changing eventually */}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
