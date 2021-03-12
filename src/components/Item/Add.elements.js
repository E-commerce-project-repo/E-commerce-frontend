import styled from "styled-components";
import {
  colors,
  max_responsive_screen_size,
  constant_variables,
} from "../../constants/constants";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding: 2% 2% 2%;
  overflow-y: scroll;

  @media screen and (max-width: ${max_responsive_screen_size}) {
    flex-direction: column;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: ${max_responsive_screen_size}) {
    flex-direction: column;
  }
`;
export const LeftUserNameIcon = styled(FaIcons.FaUser)`
  width: 30px;
  position: absolute;
  left: ${constant_variables.left_icon_left};
  top: ${constant_variables.left_icon_top};
  color: ${colors.primary};
`;
export const NameGapper = styled.div`
  display: block;
  width: 10px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3rem;
  background: ${colors.bodyColor};
  padding: 2% 2% 2%;

  @media screen and (max-width: ${max_responsive_screen_size}) {
    width: 100%;
  }
`;
export const TextHeader = styled.span`
  font-weight: 570;
  margin-bottom: 1rem;
  text-align: center;
`;
export const Text = styled.span`
  color: ${colors.dark};
  text-align: center;
`;
export const FormContainer = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  background: ${colors.white};
  background: ${colors.bodyColor};
  padding: 2% 2% 2%;

  @media screen and (max-width: ${max_responsive_screen_size}) {
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin-top: 10px;
  position: relative;
`;

export const LeftPPriceIcon = styled(FaIcons.FaDollarSign)`
  width: 30px;
  position: absolute;
  left: ${constant_variables.left_icon_left};
  top: ${constant_variables.left_icon_top};
  color: ${colors.primary};
`;
export const LeftPasswordIcon = styled(FaIcons.FaLock)`
  width: 30px;
  position: absolute;
  left: ${constant_variables.left_icon_left};
  top: ${constant_variables.left_icon_top};
  color: ${colors.primary};
`;
export const TermAndConditionWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  color: ${colors.primary};
  font-size: 19px;
  text-align: center;
  background: red;
`;
export const TermAndCondition = styled(Link)`
  color: ${colors.primary};
  font-size: 15px;
  text-decoration: none;
  text-align: center;
`;
export const LoginHeader = styled.span`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 670;
  margin-bottom: 1rem;
`;
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

export const SignInLink = styled(Link)`
  color: ${colors.primary};
  font-size: 1 rem;
  font-weight: 570;
  text-decoration: none;
`;
export const SignInLabel = styled.span`
  color: ${colors.primary};
  font-size: 1rem;
  margin-right: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 1rem;
  border: 1px solid ${colors.primary};
  border-radius: 1rem;

  :hover {
    transition: all 0.3s ease-out;
    transform: scale(1.06);
    background: ${colors.secondary};
    opacity: 0;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
`;
export const File = styled.input.attrs({ type: "file" })`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;
export const CloseOnHover = styled(FaIcons.FaTimes)`
  width: 30px;
  height: 30px;
  :hover {
    transition: all 0.3s ease-out;
    transform: scale(1.06);
    color: ${colors.secondary};
    cursor: pointer;
  }
`;
export const CloseOnHoverContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 1rem;
  border: 1px solid ${colors.primary};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  :hover {
    transition: all 0.3s ease-out;
    transform: scale(1.06);
    background: ${colors.primary};
    color: ${colors.white};
  }
`;
export const ButtonFile = styled.a`
  border-radius: 4px;
  background: ${({ size }) => (size < 5 ? colors.primary : colors.gray)};
  white-space: nowrap;
  padding: 10px 24px;
  color: ${colors.white};
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;
