import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-width: 600px;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 48px repeat(28, minmax(8px, min-content));
  -ms-grid-rows: 48px repeat(28, minmax(8px, min-content));
  grid-gap: 4px;
  -ms-grid-gap: 4px;
  font-family: "Fjalla One", sans-serif;
  margin-top: 64px;
`;

export const StyledModal = styled.div`
  width: 30vw;
  min-width: 400px;
  height: 80vh;
  background: white;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 16px;
  z-index: 1000;
`;

export const StyledModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const StyledDay = styled.div`
  font-size: 1em;
  color: #e51e25;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledEvent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 8px 2px;
  border-radius: 4px;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 8px;
  color: #e51e25;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
`;

export const StyledSubtitle = styled.div`
  font-size: 0.7em;
  margin-top: 4px;
`;

export const StyledTitle = styled.div`
  font-size: 1em;
  margin-top: 4px;
`;

export const StyledMuted = styled(StyledEvent)`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  color: white;
  cursor: initial;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
