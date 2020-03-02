import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from '../heading';
import GridCell from './grid-cell';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
      <>
        <Heading margin="0 0 1.2rem 0" size={2} weight={500}>
          Technologies I <strike>use</strike> <span role="img">&#x1F49A;</span>
        </Heading>
        <Grid>
          {images.map(image => (
            <GridCell fluid={image.node.fluid} />
          ))}
        </Grid>
      </>
    )
}

export default Technologies;