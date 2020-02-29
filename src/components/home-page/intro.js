import React from "react";
import styled from "styled-components";
import "../../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Name from "../name";
import { graphql, useStaticQuery } from "gatsby";

const IntroDetails = styled.div`
    color: var(--blue-heading);
    font-family: var(--font-sans-serif);
    font-size: 30px;

    > * {
        margin-right: 13px;
    }
`;

const Pixelated = styled.span`
    font-family: var(--font-pixel);
    font-weight: 900;
`;

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
      <>
        <Name />
        <IntroDetails>
          <FontAwesomeIcon icon="map-marker-alt" color={blackColour} />
          <span>{site.siteMetadata.location}</span>
          {/* Pipe symbol */}
          <span>&#124;</span>
          <a
            target="_blank"
            href={`https://github.com/${site.siteMetadata.social.github}`}
          >
            <FontAwesomeIcon icon={["fab", "github"]} color={blackColour} />
          </a>
          <a
            target="_blank"
            href={`https://twitter.com/${site.siteMetadata.social.twitter}`}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} color={blackColour} />
          </a>
          <a
            target="_blank"
            href={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}`}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} color={blackColour} />
          </a>
        </IntroDetails>

        <p style={{
            fontFamily: 'var(--font-sans-serif)',
            color: 'var(--blue-text)',
            fontSize: '18px'
        }}> {site.siteMetadata.description} <Pixelated>bit by bit</Pixelated> </p>
        </>
    )
}



export default Intro