import React from "react";
import styled from "styled-components";

import Particles from "./particles";
import Navbar from "./navbar";

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

const ContentContainer = styled.div`
  margin: 2.5rem var(--horizontal-spacing) 0 var(--horizontal-spacing);

  @media (max-width: 700px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const Layout = (props) => {
  const { children, location } = props;
  return (
    <Wrapper>
      <Particles />
      <Navbar />
      {youHonestlyNeedToFindABetterWayToDoThis(location.pathname)}
      <ContentContainer>
        <main
          style={{
            backgroundColor: location.pathname.match(/blog\/[a-z]+?/)
              ? "white"
              : "transparent"
          }}
        >
          {children}
        </main>
      </ContentContainer>
    </Wrapper>
  )
}

export default Layout;
