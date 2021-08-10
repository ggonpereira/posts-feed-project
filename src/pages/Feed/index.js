import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import { FeedContainer, FeedContent, FeedHeader } from "./styles";

import Title from "../../components/Title";
import FormInputTextarea from "../../components/FormInputTextarea";
import CardBasis from "../../components/CardBasis";
import PostsList from "../../components/PostsList";

import usePostFuncs from "../../hooks/usePostFuncs";
import api from "../../api";

const Feed = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await api.get("/?limit=500");
    const { data: allPosts } = response;

    setPosts(allPosts.results);
  }, []);

  const userLoggedIn = JSON.parse(
    localStorage.getItem("@CodeLeap:userData"),
  )?.[0]?.id;

  // Using the post functionalities hook
  const { savePost } = usePostFuncs(setPosts);

  const onTitleChange = ({ target }) => setTitle(target.value);
  const onContentChange = ({ target }) => setContent(target.value);

  const handleSavePost = () => {
    savePost(title, content);
  };

  return (
    <MainContainer>
      <FeedContainer>
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

          <PostsList posts={posts} setPosts={setPosts} />
        </FeedContent>
      </FeedContainer>
    </MainContainer>
  );
};

export default Feed;
