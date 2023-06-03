import { createGlobalStyle } from 'styled-components';
import robotoWoff from './../../fonts/roboto.woff';
import robotoWoff2 from './../../fonts/roboto.woff2';

const GlobalStyle = createGlobalStyle`
 @font-face {
        font-family: 'Roboto';
        src: url(${robotoWoff2}) format('woff2'),
             url(${robotoWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    :root {
        --color-primary: lime;
        --color-text: #6d7587;
        --color-button: #ebecf0;
        --color-hover: #fff;
        --backgroundColor-hover: #1b67f4;

        --shadow: 8px 8px 10px #bdbdbd, -8px -8px 10px #ffffff;
        --shadow-input: inset 2px 2px 10px #bdbdbd, inset -2px -2px 10px #ffffff;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Roboto, Verdana, Tahoma, sans-serif;
        font-size: 1.6rem;
        background-color: #f2f2f2;
    }
`;

export default GlobalStyle;
