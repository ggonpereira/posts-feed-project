import styled from "styled-components";
import BaseStyle from "../../styles/SharedStylesInputPlaceholder";

export const Textarea = styled.textarea`
  ${BaseStyle};
  height: 74px;
  min-height: 45px;
  max-height: 230px;
  resize: vertical;
`;
