import styled from "styled-components";

import cars from "../../../assets/cars.png";

export const StyledWrapper = styled.div`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #44ffd1;
  background-image: url(${cars});
  background-size: 300px auto;
  background-repeat: repeat;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;
