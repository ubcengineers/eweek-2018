import * as React from "react";
import { StyledWrapper } from "./styled";

import score from "../../../assets/score3.png";

export default () => {
  return (
    <StyledWrapper id="home">
      <img src={score} />
    </StyledWrapper>
  );
};
