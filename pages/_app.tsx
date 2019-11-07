import "normalize.css/normalize.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { StateContainer } from "../components/StateContainer";

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
  html {
    font-size: 16px;
    line-height: 19px;
    color: #031323;
    font-family: Untitled sans, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=1920" />
          <title>Theorem prototype</title>
        </Head>
        <Global />
        <StateContainer.Provider>
          <Component {...pageProps} />
        </StateContainer.Provider>
      </>
    );
  }
}
