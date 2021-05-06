import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${colors.bodyColor};
  /* background: -webkit-linear-gradient(#ffc05c, #ff3857); */
  box-shadow: 1px 1px ${colors.primary};
  color: ${colors.dark};
  padding-left: 50px;
  padding-right: 50px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
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
  animation: fade 1s linear;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${colors.secondary};
  }
  display: ${({ isHome }) => (isHome ? "none" : "")};
  font-size: 0.9rem;
  width: 7rem;

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
  text-align: center;
  justify-content: center;
  color: ${colors.dark};

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
  color: ${colors.dark};
`;
export const SearchIconWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border: none;

  outline: none;
`;

export const ImageLogo = styled.img`
  height: 50px;
  width: auto;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const SearchIcon = styled(FaIcons.FaSearch)`
  width: 20px;
  height: 20px;
  color: ${colors.dark};
  display: flex;
  justify-content: left;
  align-items: center;
  text-decoration: none;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    width: 15px;
    height: 15px;
  }
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
  width: 20px;
  height: 20px;
  color: ${colors.dark};
  display: flex;
  justify-content: left;
  align-items: center;
  text-decoration: none;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    width: 15px;
    height: 15px;
  }
`;
export const SearchIconLink = styled(Link)`
  color: ${colors.dark};
`;
