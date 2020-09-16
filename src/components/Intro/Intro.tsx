import React, { FunctionComponent } from 'react';
import styles from './Intro.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome';
import Anchor from '../Anchor';
// TODO: you should disable css hydration at runtime, instead change it to be set on compile time
// there should be a gatsby plugin already built for it, otheriwise just disable autoCSS
// you also need to add styling for the pixelated font

const Intro: FunctionComponent = () => {
  const blackColour = '#222932';
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
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
            youtube
          }
        }
      }
    }
  `);

  return (
    <div className={styles.intro}>
      <h1 className={styles.intro__heading}>
        {siteMetadata.author}
        <span role="img" aria-label="introductory wave">
          &#128075;
        </span>
      </h1>
      <div className={styles.intro__details}>
        <div className={styles.intro__location}>
          <FontAwesomeIcon icon="map-marker-alt" color={blackColour} />
          <h3>{siteMetadata.location}</h3>
        </div>
        <div className={styles.intro__socials}>
          <Anchor
            destination={`https://github.com/${siteMetadata.social.github}`}
          >
            <FontAwesomeIcon icon={['fab', 'github']} color={blackColour} />
          </Anchor>
          <Anchor
            destination={`https://www.youtube.com/channel/${siteMetadata.social.youtube}`}
          >
            <FontAwesomeIcon icon={['fab', 'youtube']} color={blackColour} />
          </Anchor>
          <Anchor
            destination={`https://www.linkedin.com/in/${siteMetadata.social.linkedin}`}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} color={blackColour} />
          </Anchor>
        </div>
      </div>
      <p>
        {siteMetadata.description}{' '}
        <span className={styles.intro__slogan}>bit by bit</span>
      </p>
    </div>
  );
};

export default Intro;
