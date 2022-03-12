import React, { useCallback, useState } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import Post from '../Post';
import Modal from '../Modal';
import { LoadMorePosts } from '../../pages/Feed/styles';

import usePostFuncs from '../../hooks/usePostFuncs';
import { Posts } from '../../types/posts';
import { SetStateProp } from '../../types/state';
import { InputChangeEvent } from '../../types/form';

interface Props {
  posts: Posts[];
  setPosts: SetStateProp<Posts[]>;
}

const PostsList = ({ posts, setPosts }: Props) => {
  const [actualPostId, setActualPostId] = useState<number>(0);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedContent, setEditedContent] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [noOfElements, setNoOfElements] = useState<number>(5);
  const loadedPosts = posts.slice(0, noOfElements);

  // Using the post functionalities hook
  const { removePostFunc, saveEditedPostFunc } = usePostFuncs(setPosts);

  const onEditedContentChange = ({ target }: InputChangeEvent) =>
    setEditedContent(target.value);
  const onEditedTitleChange = ({ target }: InputChangeEvent) => {
    setEditedTitle(target.value);
  };

  const handleRemovePost = (postId: number) => {
    removePostFunc(postId);
  };

  const openModal = (postId: number) => {
    setActualPostId(postId);
    setIsModalOpen(prevValue => !prevValue);
  };

  const handleSaveEditedPost = () => {
    saveEditedPostFunc(
      actualPostId,
      setIsModalOpen,
      editedTitle,
      editedContent,
      setEditedTitle,
      setEditedContent,
    );
  };

  // Calculate how long the post was created
  const calculatePostTime = useCallback((createdAt: string) => {
    const parsedData =
      createdAt.toString().charAt(0) === '2' ? parseISO(createdAt) : createdAt;
    return formatDistance(parsedData, new Date());
  }, []);

  return (
    <>
      <Modal
        showModal={isModalOpen}
        setShowModal={setIsModalOpen}
        setEditedTitle={onEditedTitleChange}
        setEditedContent={onEditedContentChange}
        onButtonClick={handleSaveEditedPost}
        editedTitle={editedTitle}
        editedContent={editedContent}
      />
      {loadedPosts.map(post => (
        <Post
          key={post.id}
          postId={post.id}
          postTitle={post.title}
          postAuthor={post.username}
          onRemoveClick={handleRemovePost}
          postTime={calculatePostTime(post.created_datetime)}
          postContent={post.content}
          modalButtonOnClick={openModal}
        />
      ))}

      {posts.length !== 0 && noOfElements < posts.length && (
        <LoadMorePosts onClick={() => setNoOfElements(noOfElements + 5)}>
          Carregar mais
        </LoadMorePosts>
      )}
    </>
  );
};

export default React.memo(PostsList);
