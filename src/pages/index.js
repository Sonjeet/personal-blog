import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/home-page/intro";
import RecentBlogs from "../components/home-page/recent-blogs";
import Technologies from "../components/home-page/technologies";

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

// left column should take up 5/12 of the width
// e.g. if we had 12 columns then left column should occupy 5 of those
const LeftColumn = styled.div`
  min-width: calc(5 * var(--h-unit));
  max-width: calc(5 * var(--h-unit));
  margin-right: var(--horizontal-spacing);

  @media (max-width: 1050px) {
    max-width: 100%;
    margin-right: 0;
    padding: 0 2.5rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

// right column should take up 4/12 of the width
// e.g. if we had 12 columns then left column should occupy 4 of those
const RightColumn = styled.div`
  min-width: calc(4 * (100vw / 12));
  max-width: calc(4 * (100vw / 12));
  margin-bottom: 2rem;

  @media (max-width: 1050px) {
    max-width: 100%;
    padding: 0 2.5rem;

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Wrapper>
        <SEO
          title="Sonj"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <LeftColumn>
          <Intro />
          <Technologies />
        </LeftColumn>
        <RightColumn>
          <RecentBlogs />
        </RightColumn>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
