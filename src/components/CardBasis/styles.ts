import styled from 'styled-components';
import colors from '../../styles/variables';

export const Card = styled.section<{ borderColor?: string }>`
  width: 100%;
  padding: 20px 25px;
  background-color: ${colors.white};
  margin: 0 auto;
  border: 1px solid ${({ borderColor }) => borderColor || '#CCCCCC'};
`;
