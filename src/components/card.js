import React from "react";
import styled from "styled-components";

import Heading from "./heading";

const CardWrapper = styled.div`
    background-color: var(--transparent-blue);
    border: 2px solid var(--light-border);
    box-shadow: var(--box-shadow);
    min-width: 100%;
    max-width: 100%;
    height: calc(2 * (100vh / 12));
    margin-bottom: 20px;
    padding: 1rem;
    cursor: pointer;
    transition: border-color 75ms ease, 
        box-shadow 150ms ease, 
        transform 0.2s ease,
        background-color 125ms ease;

    &:hover {
        transform: translateY(-4px);
        border-color: var(--heavy-border);
        background-color: var(--light-green);
        box-shadow: var(--light-box-shadow);
    }
`;

const Introduction = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--blue-text);
    font-weight: 400;
`;

const Card = ({ title, date, intro}) => {
    return(
        <>
            <CardWrapper>
                <Heading
                    color="var(--blue-text)"
                    margin="0 0 0.5rem 0"
                    size={3} 
                    weight={700}> {title} </Heading>
                <Heading
                    margin="0 0 1rem 0" 
                    size={4} 
                    weight={400}> {date} </Heading>
                <Introduction> {intro} </Introduction>
            </CardWrapper>
        </>
    );
};

export default Card;