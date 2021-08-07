import styled from "styled-components";
import colors from "../../styles/variables";

export const InputContainer = styled.form`
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${colors.dark};
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  background-color: ${colors.white};
  border: 1px solid ${colors.darkGray};
  font-size: 14px;
  padding: 7px;
  border-radius: 4px;
  margin: 10px 0 20px 0;

  &::placeholder {
    color: ${colors.secondaryGray};
  }
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
