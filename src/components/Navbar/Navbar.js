import React, { useState } from "react";
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
  SearchIcon,
  CloseIcon,
  ImageLogo,
  SearchIconLink,
} from "./Navbar.elements";

import { Autocomplete } from "../SearchComponent/Search";
import { config } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/login";
import Logo from "../../images/logo.jpg";

function Navbar() {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.login);
  const { _success } = useSelector((state) => state.signup);
  const [click, setClick] = useState(false);

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

  return (
    <Nav>
      <NavLogo to={config.home}>
        <ImageLogo src={Logo} />

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
              {success || _success ? (
                <NavBtnLink
                  onClick={() => dispatch(logout())}
                  to={config.signIn}
                >
                  <Button primary={false} onClick={closeMobileMenu}>
                    Log out
                  </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to={config.signIn}>
                  {/* <Button onClick={closeMobileMenu} fontBig primary={false}> */}
                  SIGN IN
                  {/* </Button> */}
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        )}
      </NavbarContainer>
      {expandSearch ? (
        <SearchIconLink to={config.home}>
          <CloseIcon onClick={() => setExpandSearch(false)} />
        </SearchIconLink>
      ) : (
        <SearchIconLink to={config.searchedResult}>
          <SearchIcon
            onClick={() => {
              setExpandSearch(true);
              setClick(false);
            }}
          />
        </SearchIconLink>
      )}
    </Nav>
  );
}

export default Navbar;
