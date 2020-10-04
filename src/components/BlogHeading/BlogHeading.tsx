import React, { FunctionComponent } from 'react';
import styles from './BlogHeading.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from '../NavLink';

interface SiteData {
  siteMetadata: {
    author: string;
    slogan: {
      italics: string;
      pixelated: string;
    };
  };
}

const BlogHeading: FunctionComponent = () => {
  const { site }: { site: SiteData } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          slogan {
            italics
            pixelated
          }
        }
      }
    }
  `);

  return (
    <div className={styles.heading__container}>
      <NavLink destination="/">
        <h1>{site.siteMetadata.author}</h1>
      </NavLink>
      <div className={styles.heading__brand}>
        <span>{site.siteMetadata.slogan.italics}</span>
        <span>{site.siteMetadata.slogan.pixelated}</span>
      </div>
    </div>
  );
};

export default BlogHeading;
