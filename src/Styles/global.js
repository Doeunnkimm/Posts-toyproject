const {createGlobalStyle} = require('styled-components');
const {default: reset} = require('styled-reset');

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    button {
        border: none;
        font-weight: bold;
        :hover {
            cursor: pointer;
        }
    }
    textarea {
        :focus-visible {
            outline: none;
        }
    }
`;

export default GlobalStyles;
