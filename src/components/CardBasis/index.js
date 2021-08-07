import React from "react";
import Title from "../Title";
import { Card } from "./styles";

const CardBasis = ({ borderColor, titleSize, title, children }) => (
  <Card borderColor={borderColor}>
    <Title as={titleSize}>{title}</Title>
    {children}
  </Card>
);

export default CardBasis;
