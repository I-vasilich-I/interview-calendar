import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ff5608;
    --primary-light-color: #ff560832;
    --bg-color: #ffffff;
    --text-color:  #213547;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    color: var(--text-color);
    background-color: var(--bg-color);
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: rgba(115, 114, 181, 0.1);
  }

  #root {
    width: 100%;
  }
`

export default GlobalStyles;