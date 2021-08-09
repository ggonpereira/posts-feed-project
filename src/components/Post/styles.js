import styled from "styled-components";
import colors from "../../styles/variables";

export const PostContainer = styled.article`
  width: 100%;
  margin-top: 35px;
  border: 1px solid #999999;

  &:not(:first-of-type) {
    margin-top: 45px;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  background-color: ${colors.dark};
  color: ${colors.white};
  gap: 35px;
`;

export const IconsArea = styled.div`
  display: flex;
  gap: 30px;
`;

export const ButtonImage = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 20px 25px;
  gap: 15px;
`;

export const PostInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  cursor: default;

  @media (max-width: 470px) {
    gap: 10px;
  }
`;

export const Author = styled.span`
  color: ${colors.darkGray};
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 470px) {
    font-size: 14px;
    text-align: left;
  }
`;

export const PostTime = styled.span`
  color: ${colors.darkGray};
  font-weight: 400;
  font-size: 18px;

  @media (max-width: 470px) {
    font-size: 14px;
    text-align: right;
  }
`;

export const PostContent = styled.p`
  color: ${colors.dark};
  font-size: 18px;
  white-space: pre-line;
`;
