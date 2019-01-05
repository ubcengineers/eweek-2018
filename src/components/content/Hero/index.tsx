import * as React from "react";
import {
  StyledCountdownText,
  StyledInnerWrapper,
  StyledPineapple,
  StyledWrapper
} from "./styled";

import pineapple from "../../../assets/pineapple.png";

export default () => {
  return (
    <StyledWrapper id="home">
      <StyledInnerWrapper>
        <StyledCountdownText>0{13 - new Date().getDate()}</StyledCountdownText>
        <StyledPineapple src={pineapple} draggable={false} />
        <StyledCountdownText>DAYS</StyledCountdownText>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};
