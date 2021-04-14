import React from "react";
import App from "next/app";
import Head from "next/head";
import "../assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { createGlobalStyle } from 'styled-components'
import AppProvider from "../context/AppProvider";
import "../public/styles/globals.css";
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from "../shared/components/FacetSnackbar";
import FacetHead from '../shared/components/FacetHead';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import isDevelopment from "../utils/isDevelopment";

if (!isDevelopment()) {
  config.oauth.redirectSignIn = `https://app.facet.run/`;
  config.oauth.redirectSignOut = `https://app.facet.run/`;
}

Amplify.configure(config);

const snackbarConfig = {
  autoHideDuration: 4000,
  vertical: 'bottom',
  horizontal: 'left'
};

Sentry.init({
  dsn: "https://096ad65e15374a91ba548f74712534c0@o460218.ingest.sentry.io/5691543",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
