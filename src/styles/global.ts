import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.txt.secondary};
    background-color: ${({ theme }) => theme.bg.secondary};
    font-size: 1.6rem;
  }

  #__next, body {
    height: 100vh;
  }

  :root {
    font-size: 100%;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
  }
`;

export default GlobalStyle;
