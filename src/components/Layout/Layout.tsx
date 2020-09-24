import React, { FunctionComponent } from 'react';
import styles from './Layout.module.scss';
import NavLink from '../NavLink';
import Particles from '../Particles';
// TODO:
// background of content should be based on whether it's homepage or not
// e.g. home page should be transparent background so we can still see the particles
// but on the blog pages, particles can get distracting if you're trying to read

interface LayoutProps {
  page: string;
}

const getLayoutClassName = (page: string): string => {
  interface ClassNames {
    [key: string]: string;
  }

  const bemElement = 'layout__content';
  const classNames: ClassNames = {
    home: `${bemElement}Home`,
    blogs: `${bemElement}Blogs`,
    'blog-post': `${bemElement}BlogPost`,
  };

  if (page.length === 0) {
    return classNames['home'];
  }

  return classNames[page];
};

const Layout: FunctionComponent<LayoutProps> = ({ children, page }) => (
  <>
    <Particles />
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
          <div className={styles.layout__navbarTooltip}>
            <NavLink destination="/">Contact</NavLink>
            <span className={styles.layout__navbarTooltipText}>
              Contact page is a work in progress at the moment.
            </span>
          </div>
        </div>
      </nav>
      <main className={styles[getLayoutClassName(page)]}>{children}</main>
      <footer className={styles.layout__footer}>
        Sonjeet Paul &copy; {new Date().getFullYear()}
      </footer>
    </div>
  </>
);

export default Layout;
