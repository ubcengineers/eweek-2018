import * as React from 'react';
import styled from 'styled-components';

import { CountdownItem } from './CountdownItem';

const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export class Countdown extends React.Component {

    public state = {
        time: 0,
    }

    public componentDidMount() {
        const date = new Date();
        this.setState({time: 1547445600000 - date.getTime()});
        setTimeout(this.onTick, 1000);
    }

    public render() {
        return (
            <StyledWrapper>
                <CountdownItem value={Math.round(this.state.time / (1000*3600*24))} text="days"/>
                <CountdownItem value={Math.round(this.state.time / (1000*3600) % 24)} text="hours"/>
                <CountdownItem value={Math.round(this.state.time / (1000*60) % 60)} text="minutes"/>
                <CountdownItem value={Math.round(this.state.time / 1000 % 60)} text="seconds"/>
            </StyledWrapper>
        )
    }

    private onTick = () => {
        this.setState({time: this.state.time - 1000});
        setTimeout(this.onTick, 1000);
    }
}