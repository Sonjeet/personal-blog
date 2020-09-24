import React, { FunctionComponent } from 'react';
import styles from './404.module.scss';
import Layout from '../components/Layout';
import NavLink from '../components/NavLink';

const ErrorPage: FunctionComponent = () => (
  <Layout page="404">
    <h1>
      Page not found. You're drunk, go <NavLink destination="/">home</NavLink>{' '}
    </h1>
  </Layout>
);

export default ErrorPage;
