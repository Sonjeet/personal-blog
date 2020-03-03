import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

const CellWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.7rem;
    margin-left: auto;
    margin-right: auto;
    min-width: calc(var(--h-unit) - 5px);
    max-width: calc(var(--h-unit) - 5px);
    max-height: calc(var(--h-unit) - 5px);
    min-height: calc(var(--h-unit) - 5px);
    background-color: var(--transparent-blue);
    border: 2px solid var(--light-border);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.2s linear 0s;

    * {
        min-height: 70%;
        min-width: 70%;
    }

    &:hover {
        z-index: 2;
        box-shadow: var(--light-box-shadow);
        transform: scale(1.3);
        background-color: var(--light-green);
        border-color: var(--heavy-border);
    }

    @media(max-width: 1050px) {
        min-width: calc((var(--h-unit) * 2) - 5px);
        max-width: calc((var(--h-unit) * 2) - 5px);
        max-height: calc((var(--h-unit) * 2) - 5px);
        min-height: calc((var(--h-unit) * 2) - 5px);
    }

    @media(max-width: 700px) {
        min-width: calc((var(--h-unit) * 3) - 5px);
        max-width: calc((var(--h-unit) * 3) - 5px);
        max-height: calc((var(--h-unit) * 3) - 5px);
        min-height: calc((var(--h-unit) * 3) - 5px);
        margin-bottom: 1rem;
    }
`; 

const GridCell = ({ fluid }) => {
    return (
        <CellWrapper>
            <Img fluid={fluid} alt={fluid.originalName}/>
        </CellWrapper>
    );
};

export default GridCell;