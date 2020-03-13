import React from "react";
import styled from "styled-components";

import Particles from "./particles";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = styled.div`
  min-height: 100vh;
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
      <Footer />
    </Wrapper>
  )
}

export default Layout;
