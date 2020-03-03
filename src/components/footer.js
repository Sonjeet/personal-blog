import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
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