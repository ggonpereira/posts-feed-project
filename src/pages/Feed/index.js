import React, { useCallback, useState } from "react";
import * as uuid from "uuid";
import { formatDistance, parseISO } from "date-fns";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import MainContainer from "../../components/MainContainer";
import {
  FeedContainer,
  FeedContent,
  FeedHeader,
  LoadMorePosts,
} from "./styles";
import Title from "../../components/Title";
import FormInputTextarea from "../../components/FormInputTextarea";
import CardBasis from "../../components/CardBasis";
import Post from "../../components/Post";

const MySwal = withReactContent(Swal);

const Feed = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noOfElements, setNoOfElements] = useState(6);
  const [posts, setPosts] = useState(() => {
    // Instead of using a useEffect, this will automatically set the saved posts into the state
    const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));

    if (savedData) {
      const savedPosts = savedData[1].posts;

      if (savedPosts) return savedPosts;
      return [];
    }

    return [];
  });
  const loadedPosts = posts.slice(0, noOfElements);

  const userLoggedIn = JSON.parse(
    localStorage.getItem("@CodeLeap:userData"),
  )?.[0]?.id;

  function onTitleChange({ target }) {
    setTitle(target.value);
  }

  function onContentChange({ target }) {
    setContent(target.value);
  }

  function handleSavePost() {
    const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));

    const newPost = {
      id: `post:${uuid.v4()}`,
      title,
      content,
      createdBy: savedData[0].name,
      // authorId: savedData[0].id,
      createdAt: new Date(),
    };

    const newArray = [
      { ...savedData[0] },
      { posts: [...savedData[1].posts, newPost] },
    ];

    setPosts(newArray[1].posts);
    return localStorage.setItem("@CodeLeap:userData", JSON.stringify(newArray));
  }

  function handleRemovePost(postId) {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const savedData = JSON.parse(
          localStorage.getItem("@CodeLeap:userData"),
        );
        const savedPosts = savedData[1].posts;

        const newArray = [
          { ...savedData[0] },
          { posts: savedPosts.filter((post) => post.id !== postId) },
        ];

        setPosts(newArray[1].posts);
        MySwal.fire("Deleted!", "Your post has been deleted.", "success");
        return localStorage.setItem(
          "@CodeLeap:userData",
          JSON.stringify(newArray),
        );
      }
      return null;
    });
  }

  // Calculate how long the post was created
  const calculatePostTime = useCallback((createdAt) => {
    const parsedData =
      createdAt.toString().charAt(0) === "2" ? parseISO(createdAt) : createdAt;
    return formatDistance(parsedData, new Date(), {
      addPrefix: false,
    });
  });

  return (
    <MainContainer>
      <FeedContainer>
        {/* Devo fazer um useEffect q verifica se o usuario já existe (com base no localStorage) */}
        {/* e aí sim mostrar o form abaixo */}
        <FeedHeader>
          <Title color="#ffffff">CodeLeap Network</Title>
        </FeedHeader>
        <FeedContent>
          {userLoggedIn ? (
            <CardBasis
              borderColor="#999999"
              titleSize="h2"
              title="What's on your mind?"
            >
              <FormInputTextarea
                buttonText="Create"
                onChangeInputFunc={onTitleChange}
                onChangeTextareaFunc={onContentChange}
                onButtonClick={handleSavePost}
                disabled={title === "" || content === ""}
              />
            </CardBasis>
          ) : (
            <p>Por favor, faça login para postar algo</p>
          )}

          {loadedPosts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              postTitle={post.title}
              postAuthor={post.createdBy}
              onRemoveClick={handleRemovePost}
              // authorId={post.authorId}
              postTime={calculatePostTime(post.createdAt)}
              postContent={post.content}
            />
          ))}

          {posts.length !== 0 && noOfElements < posts.length && (
            <LoadMorePosts onClick={() => setNoOfElements(noOfElements + 6)}>
              Carregar mais
            </LoadMorePosts>
          )}
        </FeedContent>
      </FeedContainer>
    </MainContainer>
  );
};

export default Feed;