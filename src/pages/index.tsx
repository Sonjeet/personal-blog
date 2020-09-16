// TODO: create an SEO wrapper using react helmet

import * as React from 'react';
import styles from './index.module.scss';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Technologies from '../components/Technologies';
import RecentBlogs from '../components/RecentBlogs';

export default function () {
  return (
    <Layout>
      <div className={styles.container}>
        <Intro />
        <Technologies />
        <RecentBlogs />
      </div>
    </Layout>
  );
}
