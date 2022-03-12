import React from 'react';
import Title from '../Title';
import { Card } from './styles';

interface Props {
  borderColor?: string;
  fontSize?: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}

const CardBasis = ({ borderColor, fontSize, title, children }: Props) => (
  <Card borderColor={borderColor}>
    <Title fontSize={fontSize}>{title}</Title>
    {children}
  </Card>
);

export default CardBasis;
