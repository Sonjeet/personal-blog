import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

const CellWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: var(--h-unit);
    max-width: var(--h-unit);
    min-height: var(--h-unit);
    max-height: var(--h-unit);
    background-color: var(--transparent-blue);
    border: 2px solid var(--light-border);

    * {
        min-height: 70%;
        min-width: 70%;
    }
`; 

const GridCell = ({ fluid }) => {
    console.log("FLUID IS", fluid)
    return (
        <CellWrapper>
            <Img fluid={fluid} alt={fluid.originalName}/>
        </CellWrapper>
    );
};

export default GridCell;