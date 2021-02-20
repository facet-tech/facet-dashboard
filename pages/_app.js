import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import PageChange from "components/PageChange/PageChange.js";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { createGlobalStyle, ThemeProvider } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export default class MyApp extends App {
  componentDidMount() {
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <GlobalStyle />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Facet Dashboard</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
