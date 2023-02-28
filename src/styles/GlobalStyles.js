import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: hsl(218, 23%, 16%);
    font-family: "manrope", sans-serif;
}


span {
    color:  hsl(150, 100%, 66%);
    margin: 1rem;
}

p {
    color:  hsl(193, 38%, 86%);
    font-size: 1.75rem;
}

span,p {
    font-weight: 800;
   
}

`
