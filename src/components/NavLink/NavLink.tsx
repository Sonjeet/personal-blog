import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  destination: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({
  destination,
  children,
}) => {
  return (
    <Link className={styles.navlink} to={destination}>
      {children}
    </Link>
  );
};

export default NavLink;
