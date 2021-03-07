import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  NavMenuIcon,
} from "./Navbar.elements";
import { Autocomplete } from "../SearchComponent/Search";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>Meba </NavIcon>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavLogo>

        <Autocomplete />

        <NavMenu onClick={handleClick} click={click}>
          <NavItem isHome={true}>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/shoping" onClick={closeMobileMenu}>
              Supplier
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/shoping" onClick={closeMobileMenu}>
              Supplier
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/orders" onClick={closeMobileMenu}>
              Orders
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Cart
            </NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/sign-in">
                <Button primary={false}>SIGN IN</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/sign-in">
                <Button onClick={closeMobileMenu} fontBig primary={false}>
                  SIGN IN
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
