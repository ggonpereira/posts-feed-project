import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as uuid from "uuid";
import CardBasis from "../../components/CardBasis";
import FormOnlyInput from "../../components/FormOnlyInput";
import HomeContainer from "./styles";

const Home = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  function onUsernameChange({ target }) {
    setUsername(target.value);
  }

  function handleSaveUsername() {
    localStorage.setItem(
      "@CodeLeap:userData",
      JSON.stringify([{ id: uuid.v4(), name: username }]),
    );

    history.push("/feed");
  }

  return (
    <HomeContainer as="main">
      <CardBasis
        borderColor="#CCCCCC"
        titleSize="h3"
        title="Welcome to CodeLeap network!"
      >
        <FormOnlyInput
          label="Please enter your username"
          placeholder="John Doe"
          buttonText="Enter"
          onChangeFunc={onUsernameChange}
          onButtonClick={handleSaveUsername}
          disabled={username === "" && true}
        />
      </CardBasis>
    </HomeContainer>
  );
};

export default Home;
