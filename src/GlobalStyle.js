import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap");

:root {
   --bg-primary: #eefcff;
   --bg-signup: rgba(255, 255, 255, 0.8);
}


.dark-mode{
  --bg-primary: #222222;
  --bg-signup: #252526; 
}

.light-green{
   --primary-color:#42f0a7;
   --primary-color-light:#70edb9;
   --bg-primary: #eefcff;
   --font-primary:#666666;
   --input-invalid: #fe2f75;
   --input-valid: #fe2f75;
   --input-focus: #ffa689;
}
.light-blue{
   --primary-color: #58d5eb;
   --primary-color-light:#43c8e9;
   --bg-primary: #eefcff;
   --font-primary:#666666;
   --input-invalid: #fe2f75;
   --input-valid: #fe2f75;
   --input-focus: #ffa689;
}





* {
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  
  font-family: "Roboto", sans-serif;

  &::selection{
   color: var(--bg-primary);
   background: var(--primary-color);
  }
}


/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
} */




`;

export default GlobalStyle;
