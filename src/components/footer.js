import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    min-width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    margin-top: auto;
`;

const Footer = () => (
    <Wrapper>
        <p style={{
            marginBottom: 0,
            color: 'var(--blue-text)',
            fontFamily: 'var(--font-sans-serif)'
        }}>&copy; {new Date().getFullYear()}</p>
    </Wrapper>
);

export default Footer;