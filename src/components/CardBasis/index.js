import React from "react";
import Title from "../Title";
import { Card } from "./styles";

const CardBasis = ({ titleSize, title, children }) => (
  <Card>
    <Title as={titleSize}>{title}</Title>
    {children}
  </Card>
);

export default CardBasis;
