import styled from "styled-components";
import colors from "../../styles/variables";
import BaseStyle from "../../styles/SharedStylesInputPlaceholder";

export const FormContainer = styled.form`
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${colors.dark};
`;

export const Input = styled.input`
  ${BaseStyle};
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  padding: 5px 25px;
  font-size: 16px;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.dark};
  border: 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  transition: all 0.3s;

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.secondaryGray};
    color: ${colors.gray};
    opacity: 0.8;
  }
`;
