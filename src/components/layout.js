import React from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Layout = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Navbar />
      <div
        style={{
          marginLeft: 'var(--horizontal-spacing)',
          marginRight: 'var(--horizontal-spacing)',
          marginTop: 'calc(100vh / 12)'
        }}
      >
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default Layout;
