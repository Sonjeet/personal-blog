import React, { FunctionComponent } from 'react';
import styles from './Layout.module.scss';
import NavLink from '../NavLink';
// TODO:
// background of content should be based on whether it's homepage or not
// e.g. home page should be transparent background so we can still see the particles
// but on the blog pages, particles can get distracting if you're trying to read

interface LayoutProps {
  page: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, page }) => (
  <div
    className={`${styles.layout} ${
      page === 'home' ? styles['layoutHome'] : styles['layoutBlog']
    }`}
  >
    <nav className={styles.layout__navbar}>
      <div>
        <NavLink destination="/">Sonj.</NavLink>
      </div>
      <div>
        <NavLink destination="/blog">Blog</NavLink>
        <NavLink destination="/">Contact</NavLink>
      </div>
    </nav>
    <main className={page === 'home' ? styles.layout__homecontent : ''}>
      {children}
    </main>
    <footer className={styles.layout__footer}>
      Sonjeet Paul &copy; {new Date().getFullYear()}
    </footer>
  </div>
);

export default Layout;
