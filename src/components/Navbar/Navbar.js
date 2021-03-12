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
  SearchHandler,
  SearchIcon,
  SearchIconWrapper,
  CloseIcon,
} from "./Navbar.elements";
import { Autocomplete } from "../SearchComponent/Search";
import { config } from "../../constants/constants";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showCategory, setShowCategory] = useState(false);
  const [CategoryLabel, setCategoryLabel] = useState("All");
  const [expandSearch, setExpandSearch] = useState(false);

  const categoryLabel = (label) => {
    setCategoryLabel(label);
  };

  const handleClick = () => {
    setClick(!click);
    setExpandSearch(false);
  };
  const showCategoryFun = () => {
    setShowCategory(!showCategory);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavLogo to={config.home}>
        <NavIcon>Meba </NavIcon>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </NavLogo>
      <NavbarContainer>
        {expandSearch ? (
          <Autocomplete
            showCategoryFun={showCategoryFun}
            showCategory={showCategory}
            CategoryLabel={CategoryLabel}
            categoryLabel={categoryLabel}
          />
        ) : (
          <NavMenu onClick={handleClick} click={click}>
            <NavItem isHome={true}>
              <NavLinks to={config.home} onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to={config.shoping} onClick={closeMobileMenu}>
                Shoping
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={config.orders} onClick={closeMobileMenu}>
                Orders
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={config.addItems} onClick={closeMobileMenu}>
                Add Items
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to={config.carts} onClick={closeMobileMenu}>
                Carts
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to={config.signIn}>
                  <Button primary={false}>SIGN IN</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to={config.signIn}>
                  <Button onClick={closeMobileMenu} fontBig primary={false}>
                    SIGN IN
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        )}
      </NavbarContainer>
      {expandSearch ? (
        <CloseIcon onClick={() => setExpandSearch(false)} />
      ) : (
        <SearchIcon
          onClick={() => {
            setExpandSearch(true);
            setClick(false);
          }}
        />
      )}
    </Nav>
  );
}

export default Navbar;
