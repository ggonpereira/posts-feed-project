import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as uuid from "uuid";
import CardBasis from "../../components/CardBasis";
import FormOnlyInput from "../../components/FormOnlyInput";
import HomeContainer from "./styles";

const Home = () => {
  const [username, setUsername] = useState("");
  const [savedPosts, setSavedPosts] = useState([]);
  const history = useHistory();

  // Fetch existing posts in localStorage and save into state
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));

    if (savedData) {
      const parsedSavedPosts = savedData[1].posts;
      return setSavedPosts(parsedSavedPosts);
    }
    return setSavedPosts([]);
  }, []);

  function onUsernameChange({ target }) {
    setUsername(target.value);
  }

  function saveUsername() {
    localStorage.setItem(
      "@CodeLeap:userData",
      JSON.stringify([
        { id: uuid.v4(), name: username },
        { posts: savedPosts },
      ]),
    );

    history.push("/feed");
  }

  return (
    <HomeContainer>
      <CardBasis titleSize="h3" title="Welcome to CodeLeap network!">
        <FormOnlyInput
          label="Please enter your username"
          placeholder="John Doe"
          buttonText="Enter"
          onChangeFunc={onUsernameChange}
          onButtonClick={saveUsername}
          disabled={username === "" && true}
        />
      </CardBasis>
    </HomeContainer>
  );
};

export default Home;
