import styled from "styled-components";
import colors from "../../styles/variables";

export const FeedContainer = styled.section`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const FeedHeader = styled.header`
  background-color: ${colors.dark};
  padding: 22px 35px;
`;

export const FeedContent = styled.main`
  background-color: ${colors.white};
  padding: 30px;
`;

export const LoadMorePosts = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background-color: ${colors.dark};
  color: ${colors.white};
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  margin-top: 45px;
`;
