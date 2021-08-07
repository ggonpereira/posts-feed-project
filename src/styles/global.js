import { createGlobalStyle } from "styled-components";
import colors from "./variables";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.gray};

    &,
    input, textarea, button {
      font-family: "Roboto", sans-serif;
    }

  }
`;

export default GlobalStyle;
