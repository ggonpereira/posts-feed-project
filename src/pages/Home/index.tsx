import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as uuid from 'uuid';
import CardBasis from '../../components/CardBasis';
import FormOnlyInput from '../../components/FormOnlyInput';
import { InputChangeEvent } from '../../types/form';
import HomeContainer from './styles';

const Home = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const onUsernameChange = ({ target }: InputChangeEvent) => {
    console.info(target.value);
    setUsername(target.value);
  };

  const handleSaveUsername = () => {
    localStorage.setItem(
      '@PostsFeed:userData',
      JSON.stringify([{ id: uuid.v4(), name: username }]),
    );

    history.push('/feed');
  };

  return (
    <HomeContainer as="main">
      <CardBasis
        borderColor="#CCCCCC"
        fontSize="24px"
        title="Welcome to your Posts Feed!"
      >
        <FormOnlyInput
          label="Please enter your username"
          placeholder="John Doe"
          buttonText="Enter"
          onChangeFunc={onUsernameChange}
          onButtonClick={handleSaveUsername}
          disabled={username === '' && true}
        />
      </CardBasis>
    </HomeContainer>
  );
};

export default Home;
