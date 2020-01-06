import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const theme = {
  color: {
    primary: "#FFAD1F",
    secondary: "#000",
    tertiary: "#0A0908",
    textColor: "#fff"
  },
  fontSize: {},
  spacing: {},
  breakpoint: {
    phone: "37.5em",
    tabPort: "56.25em",
    tabLand: "75em",
    bigDesktop: "112.5em"
  }
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
