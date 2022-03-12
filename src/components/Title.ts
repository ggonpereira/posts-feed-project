import styled from 'styled-components';

const Title = styled.h3<{ fontSize?: string }>`
  color: ${({ color }) => color};
  line-break: anywhere;
  font-size: ${({ fontSize }) => `${fontSize}` || 'initial'};
`;

export default Title;
