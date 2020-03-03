import { Link } from "gatsby";
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--link);
  box-shadow: none;
  transition: all 0.2s linear 0s;
  margin-left: ${props => props.right && "auto"};
  margin-right: ${props => props.left && "auto"};

  &:hover {
    color: var(--green);
    text-shadow: var(--text-shadow);
  }
`

export default NavLink;
