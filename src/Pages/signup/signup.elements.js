import styled from "styled-components";
import { colors, max_responsive_screen_size } from "../../constants/constants";
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
  left: 5px;
  top: 55px;

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
  left: 5px;
  top: 55px;
  color: ${colors.primary};
`;

export const LeftPhoneIcon = styled(FaIcons.FaPhoneAlt)`
  width: 30px;
  position: absolute;
  left: 5px;
  top: 55px;
  color: ${colors.primary};
`;
export const LeftPasswordIcon = styled(FaIcons.FaLock)`
  width: 30px;
  position: absolute;
  left: 5px;
  top: 55px;
  color: ${colors.primary};
`;

export const TermAndCondition = styled(Link)`
  color: ${colors.primary};
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 10px;
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
