import React, { useCallback, useState } from "react";
import { formatDistance, parseISO } from "date-fns";
import Post from "../Post";
import Modal from "../Modal";
import { LoadMorePosts } from "../../pages/Feed/styles";

import usePostFuncs from "../../hooks/usePostFuncs";

const PostsList = ({ posts, setPosts }) => {
  const [actualPostId, setActualPostId] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noOfElements, setNoOfElements] = useState(6);
  const loadedPosts = posts.slice(0, noOfElements);

  // Using the post functionalities hook
  const { removePostFunc, saveEditedPostFunc } = usePostFuncs(setPosts);

  const onEditedContentChange = ({ target }) => setEditedContent(target.value);
  const onEditedTitleChange = ({ target }) => {
    setEditedTitle(target.value);
  };

  const handleRemovePost = (postId) => {
    removePostFunc(postId, setPosts);
  };

  const openModal = (postId) => {
    setActualPostId(postId);
    setIsModalOpen((prevValue) => !prevValue);
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
  const calculatePostTime = useCallback((createdAt) => {
    const parsedData =
      createdAt.toString().charAt(0) === "2" ? parseISO(createdAt) : createdAt;
    return formatDistance(parsedData, new Date(), {
      addPrefix: false,
    });
  });

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
      {loadedPosts.map((post) => (
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
        <LoadMorePosts onClick={() => setNoOfElements(noOfElements + 6)}>
          Carregar mais
        </LoadMorePosts>
      )}
    </>
  );
};

export default React.memo(PostsList);
