import * as React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    text-align: center;
    margin: 8px;
`;

export const CountdownItem = (props: {value: number, text: string}) => {
    return (
        <StyledWrapper>
            <h1>{props.value}</h1>
            <p>{props.text}</p>
        </StyledWrapper>
    )
}