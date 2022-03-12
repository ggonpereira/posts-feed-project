import React, { useEffect, useState } from 'react';
import Title from '../Title';
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
} from './styles';

import { User } from '../../types/user';

import removeIcon from '../../assets/images/remove.svg';
import editIcon from '../../assets/images/edit.svg';

interface Props {
  postId: string;
  postTitle: string;
  postAuthor: string;
  postTime: string;
  postContent: string;
  onRemoveClick: (id: string) => void;
  modalButtonOnClick: (id: string) => void;
}

const Post = ({
  postId,
  postTitle,
  postAuthor,
  postTime,
  postContent,
  onRemoveClick,
  modalButtonOnClick,
}: Props) => {
  const [sameUser, setSameUser] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('@PostsFeed:userData');
    if (storedValue) {
      const savedData: User[] = JSON.parse(storedValue);
      setSameUser(postAuthor === savedData[0].name);
    }
  }, []);

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
