// TODO: create an SEO wrapper using react helmet

import * as React from 'react';
import styles from './index.module.scss';

import Layout from '../components/Layout';
import NavLink from '../components/NavLink';
import Navbar from '../components/Navbar';
const msg: String = 'Hello Everyone';

export default function () {
  //Index will have:
  //Layout component
  //Layout's children will be the different sections of the home page
  return (
    <Layout>
      <div>hey this be a heading</div>
    </Layout>
  );
}
