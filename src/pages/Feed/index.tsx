import React, { useEffect, useState } from 'react';
import api from '../../api';
import CardBasis from '../../components/CardBasis';
import FormInputTextarea from '../../components/FormInputTextarea';
import MainContainer from '../../components/MainContainer';
import PostsList from '../../components/PostsList';
import Title from '../../components/Title';
import usePostFuncs from '../../hooks/usePostFuncs';

import { FeedContainer, FeedContent, FeedHeader } from './styles';

const Feed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState();

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const response = await api.get('/?limit=500');
      const { data: allPosts } = response;

      setPosts(allPosts.results);
      setLoading(false);
    };

    const userFromLocalStorage = localStorage.getItem('@CodeLeap:userData');
    if (userFromLocalStorage)
      setUserLoggedIn(JSON.parse(userFromLocalStorage)[0].id);

    fetchPosts();
  }, []);

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
                disabled={title === '' || content === ''}
              />
            </CardBasis>
          ) : (
            <p>Por favor, faça login para postar algo</p>
          )}

          {!loading ? (
            <PostsList posts={posts} setPosts={setPosts} />
          ) : (
            <p style={{ marginTop: '10px' }}>Carregando os posts...</p>
          )}
        </FeedContent>
      </FeedContainer>
    </MainContainer>
  );
};

export default Feed;
