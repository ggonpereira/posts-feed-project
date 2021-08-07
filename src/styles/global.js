import { createGlobalStyle } from "styled-components";
import colors from "./variables";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :root {
    font-size: 62.5%;
  } */

  body {
    background-color: ${colors.gray};
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
