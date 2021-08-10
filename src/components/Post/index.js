import React from "react";
import Title from "../Title";
import {
  PostContainer,
  PostHeader,
  IconsArea,
  ButtonImage,
  PostBody,
  PostInfos,
  Author,
  PostTime,
  PostContent,
} from "./styles";

import removeIcon from "../../assets/images/remove.svg";
import editIcon from "../../assets/images/edit.svg";

const Post = ({
  postId,
  postTitle,
  postAuthor,
  postTime,
  postContent,
  onRemoveClick,
  modalButtonOnClick,
}) => {
  const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));
  // Will return a boolean to future verifications
  const sameUser = savedData[0].name === postAuthor;

  return (
    <PostContainer>
      <PostHeader>
        <Title as="h2">{postTitle}</Title>
        {sameUser && (
          <IconsArea>
            <ButtonImage onClick={() => onRemoveClick(postId)}>
              <img src={removeIcon} alt="Remove Post" />
            </ButtonImage>

            <ButtonImage onClick={() => modalButtonOnClick(postId)}>
              <img src={editIcon} alt="Edit Post" />
            </ButtonImage>
          </IconsArea>
        )}
      </PostHeader>
      <PostBody>
        <PostInfos>
          <Author>{`@${postAuthor}`}</Author>
          <PostTime>{`${postTime}`}</PostTime>
        </PostInfos>
        <PostContent>{postContent}</PostContent>
      </PostBody>
    </PostContainer>
  );
};

export default React.memo(Post);
