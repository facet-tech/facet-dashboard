import React from "react";
import App from "next/app";
import Head from "next/head";
import "../assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { createGlobalStyle } from 'styled-components'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import AppProvider from "../context/AppProvider";
import "../styles/globals.css";
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from "../shared/components/FacetSnackbar";
import FacetHead from '../shared/components/FacetHead';

const snackbarConfig = {
  autoHideDuration: 4000,
  vertical: 'bottom',
  horizontal: 'left'
};

Amplify.configure(aws_exports);

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
        <SnackbarProvider
          style={{ height: '2rem' }}
          maxSnack={4}
          disableWindowBlurListener
          autoHideDuration={snackbarConfig.autoHideDuration}
          iconVariant={{
            error: '✖️',
            warning: '⚠️',
          }}
          anchorOrigin={{
            vertical: snackbarConfig.vertical,
            horizontal: snackbarConfig.horizontal,
          }}
          content={(key, message) => (
            <FacetSnackbar id={key} {...message} />
          )}
        ></SnackbarProvider>
        <AppProvider>

          <GlobalStyle />
          <FacetHead />
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
          {/* make height full */}
          <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    background-color: #111111;
                }

                body {
                  position: relative;
                  height: auto;
                  min-height: 100% !important;
              }
            `}</style>
        </AppProvider>
      </React.Fragment>
    );
  }
}
