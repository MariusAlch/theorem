import "normalize.css/normalize.css";

import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";
import { StateContainer } from "../components/StateContainer";

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
  html {
    font-size: 16px;
    font-family: Untitled sans;
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Untitled Sans";
    src: url('/font/Untitled_Sans_Regular.woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: "Untitled Sans";
    src: url('/font/Untitled_Sans_Medium.woff2');
    font-weight: 700;
  }
  @font-face {
    font-family: "Untitled Sans";
    
    src: url('/font/Untitled_Sans_Bold.woff2');
    font-weight: 900;
  }

`;

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Global />
        <StateContainer.Provider>
          <Component {...pageProps} />
        </StateContainer.Provider>
      </>
    );
  }
}
