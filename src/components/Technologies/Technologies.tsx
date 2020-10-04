import React, { FunctionComponent } from 'react';
import styles from './Technologies.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface ImageSharpEdge {
  node: {
    fluid: FluidObject;
  };
}

const Technologies: FunctionComponent = () => {
  const allImages: ImageSharpEdge[] = useStaticQuery(graphql`
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
  `).allImageSharp.edges;

  return (
    <div className={styles.technologies}>
      <h2 className={styles.technologies__heading}>
        Technologies I <strike>use</strike>
        <span role="img" aria-label="heart">
          &#x1F49A;
        </span>
      </h2>
      <div className={styles.technologies__grid}>
        {allImages.map((image) => (
          <div className={styles.technologies__tile} key={image.node.fluid.src}>
            <Img fluid={image.node.fluid} alt="TODO:MUSTCHANGE" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
