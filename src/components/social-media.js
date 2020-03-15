import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const blackColour = "#222932";

const LinkWrapper = styled.a`
    box-shadow: none;
    transition: all 0.2s linear 0s;
    font-size: 1rem;
    display: inline-block;
    margin: 0 5px;
    &:hover {
        transform: translateY(-2px);
    }
`;

const NewTabLink = ({ children, url }) => (
    <LinkWrapper href={url}>
        {children}
    </LinkWrapper>
);

const SocialMedia = ({ github, twitter, linkedin }) => (
    <>
        <NewTabLink
            url={`https://github.com/${github}`}
        >
            <FontAwesomeIcon icon={["fab", "github"]} color={blackColour} />
        </NewTabLink>
        <NewTabLink
            url={`https://twitter.com/${twitter}`}
        >
            <FontAwesomeIcon icon={["fab", "twitter"]} color={blackColour} />
        </NewTabLink>
        <NewTabLink
            url={`https://www.linkedin.com/in/${linkedin}`}
        >
            <FontAwesomeIcon icon={["fab", "linkedin"]} color={blackColour} />
        </NewTabLink>
    </>
);

export default SocialMedia; 