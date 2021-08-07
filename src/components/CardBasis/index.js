import React from "react";
import Title from "../Title";
import { Card, Container } from "./styles";

const CardBasis = ({ titleSize, title, children }) => (
  <Container>
    <Card>
      <Title as={titleSize}>{title}</Title>
      {children}
    </Card>
  </Container>
);

export default CardBasis;
