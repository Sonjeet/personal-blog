import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from '../heading';
import GridCell from './grid-cell';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    @media(max-width: 1050px) {
        padding: 0 calc(var(--h-unit) * 2);
    }

    @media(max-width: 700px) {
        padding: 0 var(--h-unit);
    }

    @media(max-width: 540px) {
        padding: 0 calc(var(--h-unit) / 2);
    }
`;

const Wrapper = styled.div`
    margin-bottom: 2rem;

    @media(max-width: 1050px) {
        text-align: center;
    }

    @media(max-width: 700px) {
        h2 {
            font-size: 1.8em;
        }
    }

    @media (max-width: 500px) {
        h2 {
            font-size: 1.2em;
        }
    }
`;

const Technologies = () => {
    const { allFile, allImageSharp } = useStaticQuery(graphql`
        {
            allImageSharp {
                edges {
                    node {
                        fluid {
                            # The GastsbyImageSharpFluid gets these items:
                            # src
                            # srcSet
                            # base64
                            # aspectRatio
                            # originalImg
                            # sizes
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                    }
                }
            }
        }
    `);

    const fileNames = allFile.edges.map(file => file.node.relativePath);
    const allImages = allImageSharp.edges;
    const images = allImages.filter(image => fileNames.includes(image.node.fluid.originalName));

    return (
      <Wrapper>
        <Heading margin="0 0 1.2rem 0" size={2} weight={500}>
          Technologies I <strike>use</strike> <span role="img">&#x1F49A;</span>
        </Heading>
        <Grid>
          {images.map(image => (
            <GridCell key={image.node.fluid.originalName} fluid={image.node.fluid} />
          ))}
        </Grid>
      </Wrapper>
    )
}

export default Technologies;