import { createGlobalStyle } from "styled-components";

const Fonts = `
@font-face {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(fonts/DMSerifDisplay-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(fonts/DMSans-Italic.ttf) format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(fonts/DMSans-MediumItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(fonts/DMSans-BoldItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(fonts/DMSans-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Cp2ywxg089UriAWCrCBamC2QX.woff2) format('truetype');
}


@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Cp2ywxg089UriASitCBamC2QX.woff2) format('truetype');
}
`;

export const GlobalStyle = createGlobalStyle`
    ${Fonts};

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'DM Sans';
    }

    :root {
        --chorus-accent-color: #114ADD;
        --chorus-white: #FFFFFF;
    }
`;