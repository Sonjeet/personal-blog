import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

// style constants
const marginLeft = '20px';

const NavWrapper = styled.div`
    width: 100vw;
    height: 80px;
    color: var(--link);
    display: flex;
    justify-content: space-between;
    padding: 30px var(--horizontal-spacing);
    font-family: var(--font-sans-serif);
    text-decoration: none;
    font-weight: 800;
    text-rendering: optimizeLegibility;
`;

// if prop.slot is 'left' then apply margin-right 
// if prop.slot is 'right' then apply margin-left
const NavContent = styled.div`
    > * {
        margin: ${props => props.slot === "left"
            ? `0px ${marginLeft} 0px 0px`
            : `0px 0px 0px ${marginLeft}` };
    }
`;

const Nav = () => (
    <NavWrapper>
        <NavContent slot="left">
            <Link to="/">Sonj.</Link>
        </NavContent>
        <NavContent slot="right">
            <Link to="/">Blog</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </NavContent>
    </NavWrapper> 
);

export default Nav;