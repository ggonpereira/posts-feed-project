import styled from 'styled-components';
import BaseStyle from '../../styles/SharedStylesInputPlaceholder';

export const Textarea = styled.textarea<{ resize: string }>`
  ${BaseStyle};
  height: 74px;
  min-height: 45px;
  max-height: 230px;
  resize: ${props => props.resize ?? 'vertical'};
`;
