import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr minmax(auto, 960px) 1fr;
  -ms-grid-columns: 1fr minmax(50%, 960px) 1fr;
  padding: 32px 0;
`;

export const StyledContent = styled.div`
  background: white;
  grid-column-start: 2;
  -ms-grid-column: 2;
  grid-column-end: span 1;
  padding: 64px;
  overflow-x: auto;

  @media screen and (max-width: 960px) {
    & {
      padding: 16px;
    }
  }
`;
