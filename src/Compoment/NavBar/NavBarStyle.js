import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #ffeb00;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bolder;
  text-decoration: none;
  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  position: absolute;
  top: 0 !important;
  right: 0 !important;
  width: 30px !important;
  height: 36px !important;
  transform: translate(-100%, 60%) !important;
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  &:hover{
    background: #000;
    color: #fff;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  visibility: ${({ ishinden }) => (ishinden === "true" ? "visible" : "hidden")};
  &.active {
    border-bottom: 3.5px solid;
    border-color: ${({ boderbg }) => (boderbg === "true" ? "#000" : "#fff")};
  }
  &:hover {
    color: #fff;
  }
`;

export const NavLinksRouter = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  &.active {
    border-bottom: 3.5px solid;
    border-color: ${({ boderbg }) => (boderbg === "true" ? "#000" : "#fff")};
  }
  &:hover {
    color: #fff;
  }
`;

export const NavLinksA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  &.active {
    border-bottom: 3.5px solid;
    border-color: ${({ boderbg }) => (boderbg === "true" ? "#01bf71" : "#fff")};
  }
  &:hover {
    color: #01bf71;
  }
`;