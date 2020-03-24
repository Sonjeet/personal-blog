import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SocialMedia from './social-media';

const Wrapper = styled.footer`
    min-width: 100vw;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin-top: auto;
`;

const P = styled.p`
    margin-bottom: 0;
    color: var(--blue-text);
    font-family: var(--font-sans-serif);
`;

const Footer = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    social {
                        github
                        linkedin
                        twitter
                        youtube
                    }
                }
            }
        }
    `);

    return (
        <Wrapper>
            <P>{site.siteMetadata.author} | <SocialMedia 
                github={site.siteMetadata.social.github}
                youtube={site.siteMetadata.social.youtube}
                linkedin={site.siteMetadata.social.linkedin}
            /></P>
        </Wrapper>
    );
};

export default Footer;