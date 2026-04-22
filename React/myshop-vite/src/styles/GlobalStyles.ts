// CSS IN JS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #f7f7f7;
}

body, button, input{
    font-family: 'Poppins', sans-serif;
}

button{
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
        filter: brightness();
        transition: 0.3s;
    }
}


`;