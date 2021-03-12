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
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3rem;
  @media screen and (max-width: ${max_responsive_screen_size}) {
    display: none;
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

export const LeftPhoneIcon = styled(FaIcons.FaLock)`
  width: 30px;
  position: absolute;
  left: ${constant_variables.left_icon_left};
  top: ${constant_variables.left_icon_top};
  color: ${colors.primary};
`;
export const ForgetPassword = styled(Link)`
  color: ${colors.primary};
  text-align: right;
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const LoginHeader = styled.span`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 670;
  margin-bottom: 1rem;
`;
export const SignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

export const SignupLink = styled(Link)`
  color: ${colors.primary};
  font-size: 1 rem;
  font-weight: 570;
  text-decoration: none;
`;
export const SignupLabel = styled.span`
  color: ${colors.primary};
  font-size: 1rem;
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
