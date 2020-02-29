import React from "react";
import styled from "styled-components";

const NameWrapper = styled.h1`
    font-family: var(--font-sans-serif);
    color: var(--blue-heading);
    font-weight: 600;
`;

// TODO: maybe use site info to get name but maybe not idk
// its just overengineering at the end of the day
const Name = () => <NameWrapper>Sonjeet Paul &#128075;</NameWrapper>

export default Name;