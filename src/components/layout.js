import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "../components/navbar";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;

    ${'' /* during index page make sure overflow-y is hidden 
      TODO: when viewport changes, make sure to change this dynamically
    */}
    overflow-y: ${props => props.pathname === '/'
      ? 'hidden'
      : 'none'};
  }
`;

const Layout = (props) => {
  const { children, location } = props;

  console.log('props be ssdfsdnfunsdfunu: ', props)
  return (
    <Wrapper>
      <GlobalStyle pathname={location.pathname} />
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
  max-height: 100vh;
  overflow: hidden;
`;

export default Layout;
