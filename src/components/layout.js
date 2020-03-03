import React from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

// TODO: sleepy sonj made a silly, find an alternative when you're awake
const youHonestlyNeedToFindABetterWayToDoThis = (pathname) => {
  document.getElementsByTagName('html')[0].style['overflow-y'] = pathname === '/'
    ? 'hidden'
    : 'scroll';
};

const Layout = (props) => {
  const { children, location } = props;

  return (
    <Wrapper>
      <Navbar />
      {youHonestlyNeedToFindABetterWayToDoThis(location.pathname)}
      <div
        style={{
          marginLeft: "var(--horizontal-spacing)",
          marginRight: "var(--horizontal-spacing)",
          marginTop: "var(--v-unit)",
        }}
      >
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`;

export default Layout;
