import { createGlobalStyle } from "styled-components";

const Fonts = `
@font-face {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(fonts/DMSerifDisplay-Regular.ttf) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
`;

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'DM Serif Display';
    }

    :root {
        --chorus-accent-color: #114ADD;
        --chorus-white: #FFFFFF;
    }

    ${Fonts};
`;