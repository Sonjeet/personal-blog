import React from "react";
import styled, { withTheme } from "styled-components";

import Particles from "./particles";
import Navbar from "./navbar";

// TODO: sleepy sonj made a silly, find an alternative when you're awake
const youHonestlyNeedToFindABetterWayToDoThis = (pathname) => {
  document.getElementsByTagName('html')[0].style['overflow-y'] = pathname === '/'
    ? 'hidden'
    : 'scroll';
};

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`

const Content = styled.main`
  background-color: ${props => props.pathname.match(/blog\/[a-z]+?/) ? "white" : "transparent"}
`;

const Layout = (props) => {
  const { children, location } = props;
  console.log(props)
  return (
    <Wrapper>
      <Particles />
      <Navbar />
      {youHonestlyNeedToFindABetterWayToDoThis(location.pathname)}
      <div
        style={{
          marginLeft: "var(--horizontal-spacing)",
          marginRight: "var(--horizontal-spacing)",
          marginTop: "var(--v-unit)",
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
