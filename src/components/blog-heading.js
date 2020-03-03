import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from './heading';
import NavLink from './nav-link';

const Wrapper = styled.div`
    min-width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--blue-text);
`;

const HeadingLink = styled(NavLink)`
  * {
    transition: all 0.2s linear 0s;

    &:hover {
      color: var(--green);
      text-shadow: var(--text-shadow);
    }
  }
`

const Italic = styled.span`
    font-weight: 200;
    font-style: italic;
`;

const Pixelated = styled.span`
    font-family: var(--font-pixel);
    font-weight: 900;

    &:before {
        content: " ";
    }
`;

const BlogHeading = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    slogan {
                        italics,
                        pixelated
                    }
                }
            }
        }
    `);

    return (
      <Wrapper>
        <HeadingLink to="/">
            <Heading margin="0 0 1rem 0" size={1} weight={700}>
                {site.siteMetadata.author}
            </Heading>
        </HeadingLink>
        <div>
            <Italic>{site.siteMetadata.slogan.italics}</Italic>
            <Pixelated>{site.siteMetadata.slogan.pixelated}</Pixelated>
        </div>
      </Wrapper>
    )
}

export { Pixelated };
export default BlogHeading;