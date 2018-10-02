import * as React from 'react';
import styled from 'styled-components';

import { Countdown } from './components/Countdown';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  public render() {
    return (
      <StyledWrapper>
        <Countdown />
      </StyledWrapper>
    );
  }
}

export default App;
