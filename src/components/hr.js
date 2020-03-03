/**
 * slanted horizontal rule components
 */

import styled from 'styled-components';

const HR = styled.hr`
    border: 2px solid var(--tranparent-blue);
    border-radius: 5px;

    &:nth-child(even) {
        transform: rotate(-2deg);
    }

    &:nth-child(odd) {
        transform: rotate(2deg);
    }
`;

export default HR;