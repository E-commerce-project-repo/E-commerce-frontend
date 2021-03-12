import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";
export const CheckboxContainer = styled.div`
  color: ${colors.primary};
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${colors.primary};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  background: ${({ checked }) => (checked ? colors.primary : "")};
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
export const CheckboxIcon = styled(FaIcons.FaCheck)`
  color: ${colors.white};
  text-align: center;
  width: 15px;
  height: 15px;
  border-radius: 20px;
`;
