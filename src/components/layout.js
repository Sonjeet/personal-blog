import React from "react";
import styled from "styled-components";

import Particles from "./particles";
import Navbar from "./navbar";
import Footer from "./footer";

// TODO: sleepy sonj made a silly, find an alternative when you're awake
const youHonestlyNeedToFindABetterWayToDoThis = (pathname) => {
  if(typeof window !== 'undefined') {
    document.getElementsByTagName('html')[0].style['overflow-y'] = (pathname === '/' && window.innerWidth > 1050)
      ? 'hidden'
      : 'scroll';
  }
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 3rem;
`;

const Layout = (props) => {
  const { children, location } = props;
  return (
    <Wrapper>
      <Particles />
      <Navbar />
      {youHonestlyNeedToFindABetterWayToDoThis(location.pathname)}
      <div
        style={{
          marginLeft: "var(--horizontal-spacing)",
          marginRight: "var(--horizontal-spacing)",
          marginTop: "2.5rem",
        }}
      >
        <main
          style={{
            backgroundColor: location.pathname.match(/blog\/[a-z]+?/)
              ? "white"
              : "transparent"
          }}
        >
          {children}
        </main>
      </div>
    </Wrapper>
  )
}

export default Layout;
