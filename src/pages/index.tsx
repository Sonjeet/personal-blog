// TODO: create an SEO wrapper using react helmet

import * as React from 'react';
import styles from './index.module.scss';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Technologies from '../components/Technologies';

export default function () {
  //Index will have:
  //Layout component
  //Layout's children will be the different sections of the home page
  return (
    <Layout>
      <div className={styles.container}>
        <Intro />
        <Technologies />
      </div>
    </Layout>
  );
}
