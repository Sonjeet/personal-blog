import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/home-page/intro";
import RecentBlogs from "../components/home-page/recent-blogs";

const Wrapper = styled.div`
  display: flex;
`

// left column should take up 5/12 of the width
// e.g. if we had 12 columns then left column should occupy 5 of those
const LeftColumn = styled.div`
  min-width: calc(5 * (100vw / 12));
  max-width: calc(5 * (100vw / 12));
  margin-right: var(--horizontal-spacing);
`;

// right column should take up 4/12 of the width
// e.g. if we had 12 columns then left column should occupy 4 of those
const RightColumn = styled.div`
  min-width: calc(4 * (100vw / 12));
  max-width: calc(4 * (100vw / 12));
`;

const IndexPage = (props) => {
  const siteTitle = "Temp title"

  return (
    <Layout location={props.location} title={siteTitle}>
      <Wrapper>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <LeftColumn>
          <Intro />
        </LeftColumn>
        <RightColumn>
          <RecentBlogs />
          {/* <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link> */}
        </RightColumn>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
