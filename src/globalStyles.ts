import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#fff")};
    color: ${props => (props.theme.mode === "dark" ? "#f5f5f5" : "#111")};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a{
    text-decoration:none;
  }
`;

export default GlobalStyle;
