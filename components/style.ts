import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    :root {
        --chorus-accent-color: #114ADD;
        --chorus-white: #FFFFFF;
    }
`