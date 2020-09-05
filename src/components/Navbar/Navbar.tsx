import React, { FunctionComponent } from 'react';
import styles from './Navbar.module.scss';
import NavLink from '../NavLink';

const Navbar: FunctionComponent = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__left}>
      <NavLink destination="/">Sonj.</NavLink>
    </div>
    <div className={styles.navbar__right}>
      <NavLink destination="/">Blog</NavLink>
      <NavLink destination="/">Contact</NavLink>
    </div>
  </nav>
);

export default Navbar;
