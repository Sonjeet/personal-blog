import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";

import "../../utils/fontawesome";
import Heading from "../heading";

const IntroDetails = styled.div`
    color: var(--blue-heading);
    font-family: var(--font-sans-serif);
    font-size: 30px;
    display: flex;

    > * {
        margin-right: 13px;
    }
`;

const Pixelated = styled.span`
    font-family: var(--font-pixel);
    font-weight: 900;
`;

const Wrapper = styled.div`
  margin-bottom: calc(0.5 * (100vh / 12));
`;

const LinkWrapper = styled.a`
  box-shadow: none;
  transition: all 0.2s linear 0s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const NewTabLink = ({ children, url }) => (
  <LinkWrapper href={url}>{children}</LinkWrapper>
);

const Intro = () => {
    const blackColour = "#222932";
    const { site } = useStaticQuery(graphql`
      query MyQuery {
        site {
          siteMetadata {
            author
            description
            location
            social {
              github
              linkedin
              twitter
            }
          }
        }
      }
    `);

    return (
      <Wrapper>
        {/* <Name /> */}
        <Heading margin="0 0 1.4rem 0" size={1} weight={600}>
          {site.siteMetadata.author} <span role="img">&#128075;</span>
        </Heading>
        <IntroDetails>
          <FontAwesomeIcon icon="map-marker-alt" color={blackColour} />
          <Heading margin="0 0 1.2rem 0" size={2} weight={500}>
            {site.siteMetadata.location}
          </Heading>

          {/* Pipe symbol */}
          <span>&#124;</span>

          <NewTabLink
            url={`https://github.com/${site.siteMetadata.social.github}`}
          >
            <FontAwesomeIcon icon={["fab", "github"]} color={blackColour} />
          </NewTabLink>
          <NewTabLink
            url={`https://twitter.com/${site.siteMetadata.social.twitter}`}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} color={blackColour} />
          </NewTabLink>
          <NewTabLink
            url={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}`}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} color={blackColour} />
          </NewTabLink>
        </IntroDetails>

        <p
          style={{
            fontFamily: "var(--font-sans-serif)",
            color: "var(--blue-text)",
            fontSize: "18px",
          }}
        >
          {" "}
          {site.siteMetadata.description} <Pixelated>bit by bit</Pixelated>{" "}
        </p>
      </Wrapper>
    )
}



export default Intro