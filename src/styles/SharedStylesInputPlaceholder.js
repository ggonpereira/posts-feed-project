import { css } from "styled-components";
import colors from "./variables";

const BaseStyle = css`
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

export default BaseStyle;
