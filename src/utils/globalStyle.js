import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    
    @media only screen and (max-width: ${props =>
      props.theme.breakpoint.tabLand}) { 
      font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }
    @media only screen and (max-width: ${props =>
      props.theme.breakpoint.tabPort}) { 
      font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }

    @media only screen and (min-width: ${props =>
      props.theme.breakpoint.bigDesktop}) { 
      font-size: 75%; //1rem = 12, 12/16
    }
  }
  body {
    box-sizing: border-box;
    font-size: 1em;
    line-height: 1.7;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.textColor};
    text-align: center;
    margin: 0 auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  ::-moz-selection {
    background: ${props => props.theme.color.primary};
    color: inherit;
    text-shadow: none;
  }
  
  ::selection {
      background: ${props => props.theme.color.primary};
      color: inherit;
      text-shadow: none;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: transparent;
    &:hover, &:focus {
      color: ${props => props.theme.color.primary};
      fill: ${props => props.theme.color.primary};
      svg {
        g {
          color: ${props => props.theme.color.primary};
          fill: ${props => props.theme.color.primary};
        }
      }
    }

    &:focus {
        outline: thin dotted; 
    }

    &:hover, &:active {
        outline: none;
    }
  }
  
`;

export default GlobalStyle;
