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
  height: 100vh;
  padding: 5%;
  padding-top: 2%;
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
  width: 20px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3rem;
  @media screen and (max-width: ${max_responsive_screen_size}) {
    display: none;
    width: 100%;
  }
`;
export const TextHeader = styled.span`
  font-weight: 570;
  margin-bottom: 1rem;
`;
export const Text = styled.span`
  color: ${colors.dark};
`;
export const FormContainer = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  width: 40%;
  overflow-y: scroll;
  height: auto;

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

export const LeftEmailIcon = styled(FaIcons.FaEnvelope)`
  width: 30px;
  position: absolute;
  left: ${constant_variables.left_icon_left};
  top: ${constant_variables.left_icon_top};
  color: ${colors.primary};
`;

export const LeftPhoneIcon = styled(FaIcons.FaPhoneAlt)`
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
  justify-content: center;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  color: ${colors.primary};
  font-size: 12px;
  text-align: center;
  background-color: red;
`;
export const TermAndCondition = styled(Link)`
  color: ${colors.primary};
  font-size: 12px;
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
// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-direction: column;
`;

export const ButtonFile = styled.a`
  border-radius: 4px;
  background: ${colors.primary};
  white-space: nowrap;
  padding: 10px 24px;
  color: ${colors.white};
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
`;

export const File = styled.input.attrs({ type: "file" })`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
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
    cursor: pointer;
  }
`;
