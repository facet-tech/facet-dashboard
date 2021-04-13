import React from "react";
import App from "next/app";
import Head from "next/head";
import "../assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { createGlobalStyle } from 'styled-components'
// import Amplify from 'aws-amplify';
// import awsConfig from '../aws-exports';
import AppProvider from "../context/AppProvider";
import "../public/styles/globals.css";
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from "../shared/components/FacetSnackbar";
import FacetHead from '../shared/components/FacetHead';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import Amplify from 'aws-amplify'
import config from '../aws-exports'

Amplify.configure(config)
const snackbarConfig = {
  autoHideDuration: 4000,
  vertical: 'bottom',
  horizontal: 'left'
};

// const [
//   localRedirectSignIn,
//   productionRedirectSignIn,
// ] = awsConfig.oauth.redirectSignIn.split(",");

// const [
//   localRedirectSignOut,
//   productionRedirectSignOut,
// ] = awsConfig.oauth.redirectSignOut.split(",");

// const updatedAwsConfig = {
//   ...awsConfig,
//   oauth: {
//     ...awsConfig.oauth,
//     redirectSignIn: 'http://localhost:3000/authentication',
//     redirectSignOut: 'http://localhost:3000/authentication',
//   }
// }

// Amplify.configure(awsConfig);
// workiung vs not working
// https://facetextensionfd235e0e-fd235e0e-dev.auth.us-west-2.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=http://localhost:3000/&response_type=CODE&client_id=6fa4fhctnojuf3hmlvo0mvsp02&scope=email%20openid%20phone%20profile
// https://facetextensionfd235e0e-fd235e0e-dev.auth.us-west-2.amazoncognito.com/oauth2/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&response_type=code&client_id=6fa4fhctnojuf3hmlvo0mvsp02&identity_provider=COGNITO&scope=phone%20email%20openid%20profile%20aws.cognito.signin.user.admin&state=lPw4u3rlag76yBjQIf7vObJBSZbcRgEn&code_challenge=Qh8azC0lF9IzG6P7u5PFPiAwxuOf72mEM8GRrJTI58s&code_challenge_method=S256

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
