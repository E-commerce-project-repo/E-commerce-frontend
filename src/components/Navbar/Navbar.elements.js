import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { colors } from "../../constants/constants";
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${colors.dark};
  box-shadow: 1px 1px ${colors.primary};
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;
export const NavLogo = styled(Link)`
  color: ${colors.white};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.span`
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavMenuIcon = styled(FaBars)`
  margin-right: 1rem;
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-right: 1rem;
    cursor: pointer;
    justify-content: center;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: block;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colors.primary};
  }
`;
export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${colors.secondary};
  }
  display: ${({ isHome }) => (isHome ? "none" : "")};

  @media screen and (max-width: 960px) {
    display: flex;
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: ${colors.secondary};
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
