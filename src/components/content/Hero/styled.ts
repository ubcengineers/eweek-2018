import styled from "styled-components";

import cars from "../../../assets/cars.png";

export const StyledWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr minmax(auto, 960px) 1fr;

  background-color: #44ffd1;
  background-image: url(${cars});
  background-size: 300px auto;
  background-repeat: repeat;
`;

export const StyledInnerWrapper = styled.div`
  grid-column: 2;
  height: 50vh;
  margin-bottom: 20vh;

  background: white;

  padding: 0 8%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  user-select: none;

  @media screen and (max-width: 960px) {
    & {
      height: calc(378px - (336px - 35vw));
      margin-bottom: calc(151.2px - (96px - 10vw));
    }
  }
`;

export const StyledCountdownText = styled.div`
  font-family: Fjalla One, sans-serif;
  font-size: 22vw;
  padding-top: 16vw;
  line-height: 16vw;
  color: #44ffd1;
  overflow: hidden;

  @media screen and (min-width: 960px) {
    & {
      font-size: 211.2px;
      padding-top: 153.6px;
      line-height: 153.6px;
    }
  }
`;

export const StyledPineapple = styled.img`
  width: 18vw;
  margin-bottom: -8vw;

  @media screen and (min-width: 960px) {
    & {
      width: 172.8px;
      margin-bottom: -76.8px;
    }
  }
`;
