import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    overflow-x: hidden;
    font-family: 'Inter';
    position: relative;
  }

  a {
    text-decoration: none;
    font-family: 'Inter';
    color: #000;
  }
`;

