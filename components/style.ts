import { createGlobalStyle } from "styled-components";

const Fonts = `
@font-face {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(fonts/DMSerifDisplay-Regular.ttf) format('truetype');
}
`;

export const GlobalStyle = createGlobalStyle`
    ${Fonts};

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'DM Serif Display';
    }

    :root {
        --chorus-accent-color: #114ADD;
        --chorus-white: #FFFFFF;
    }
`;