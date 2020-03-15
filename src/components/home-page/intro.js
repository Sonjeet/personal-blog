// TODO: after dissertation finishes
// .. replace social media content in this file w/ social-media.js
// .. the only reason we haven't done it so far is because the content in this file is responsive
// .. but the social-media.js component isn't responsive for this case
// .. it's an easy fix, but dissertation stuff has gots 2 be done

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";

import "../../utils/fontawesome";
import Heading from "../heading";

const IntroDetails = styled.div`
    color: var(--blue-heading);
    font-family: var(--font-sans-serif);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 1050px) {
      justify-content: center;
    }

    @media(max-width: 1107px) {
      * {
        font-size: 1.3rem;
      }
    }

    @media(max-width: 640px) {
      * {
        font-size: 1rem;
      }
    }

    @media(max-width: 488px) {
      flex-direction: column;
    }
`;

const P = styled.p`
  font-family: var(--font-sans-serif);
  color: var(--blue-text);
  font-size: 1rem;

  @media(max-width: 1050px) {
    padding: 0 2rem;
  }

  @media(max-width: 640px) {
    font-size: 0.8rem;
    padding: 0 1.5rem;
  }

  @media(max-width: 500px) {
    padding: 0;
    font-size: 0.7rem;
  }
`;

const Pixelated = styled.span`
    font-family: var(--font-pixel);
    font-weight: 900;
`;

const Wrapper = styled.div`
  margin-bottom: calc(0.5 * (100vh / 12));

  @media (max-width: 700px) {
    h1 {
      font-size: 1.8em;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.4em;
    }
  }
`

const LinkWrapper = styled.a`
  box-shadow: none;
  transition: all 0.2s linear 0s;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin: 0 0.2rem 0 0;
  }

  &::after {
    content: " | ";
  }

  @media (max-width: 488px) {
    padding-bottom: 10px;
    &::after {
      content: "";
    }
  }
`

const SocialMediaWrapper = styled.span`
  display: flex;
  * {
    margin: 0 5px;
  }
`;

const NewTabLink = ({ children, url }) => (
  <LinkWrapper style={{display: 'flex', alignItems: 'center'}} href={url}>{children}</LinkWrapper>
);

const Intro = () => {
    const blackColour = "#222932";
    const { site } = useStaticQuery(graphql`
      query {
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
        <Heading margin="0 0 1.4rem 0" size={1} weight={600}>
          {site.siteMetadata.author}{" "}
          <span role="img" aria-label="wave">
            &#128075;
          </span>
        </Heading>
        <IntroDetails>
          <Location>
            <FontAwesomeIcon icon="map-marker-alt" color={blackColour} />
            <Heading margin="0 0.2rem 0 0" size={2} weight={500}>
              {site.siteMetadata.location}
            </Heading>
          </Location>
          <SocialMediaWrapper>
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
          </SocialMediaWrapper>
        </IntroDetails>

        <P>
          {" "}
          {site.siteMetadata.description} <Pixelated>bit by bit</Pixelated>{" "}
        </P>
      </Wrapper>
    )
}

export { NewTabLink };

export default Intro;
