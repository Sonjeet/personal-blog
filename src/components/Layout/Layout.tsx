import React, { FunctionComponent } from 'react';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';
import Footer from '../Footer';

//interface LayoutProps {
//location: string;
//}

// TODO: add footer to the bottom
// background of content should be based on whether it's homepage or not
// e.g. home page should be transparent background so we can still see the particles
// but on the blog pages, particles can get distracting if you're trying to read
const Layout: FunctionComponent = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.layout__content}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
