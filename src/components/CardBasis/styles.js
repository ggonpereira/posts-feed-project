import styled from "styled-components";
import colors from "../../styles/variables";

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

export const Card = styled.section`
  padding: 20px 25px;
  background-color: ${colors.white};
  margin: 0 auto;
  border: 1px solid #cccccc;
`;
