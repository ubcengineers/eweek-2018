import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: sticky;
  width: 100%;
  background: white;
  display: grid;
  display: -ms-grid;
  grid-template-columns: auto 1fr auto;
  -ms-grid-columns: auto 1fr auto;
  grid-template-rows: 64px;
  transition: all 0.4s;
`;

export const StyledNavItem = styled(NavLink)`
  display: inline-block;
  margin: 8px 16px;
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  color: #333;
  text-decoration: none;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const StyledNavOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledNavOverlayItem = styled(NavLink)`
  display: inline-block;
  margin: 16px 16px;
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  color: #333;
  text-decoration: none;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const StyledOpen = styled.i`
  position: fixed;
  top: 8px;
  left: 16px;
  width: 16px;
  height: 16px;
  line-height: 48px;
  vertical-align: middle;
  color: #333;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const StyledClose = styled.i`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  color: #333;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;
