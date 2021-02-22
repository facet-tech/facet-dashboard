import React from "react";
import Router from "next/router";
import isUserLoggedIn from '../utils/isUserLoggedIn';

export default function _error() {
  React.useEffect(() => {
    (async () => {
      const isUserLoggedInVal = await isUserLoggedIn();
      if (!isUserLoggedInVal) {
        Router.push("/authentication");
      } else {
        Router.push("/dashboard");
      }
    })()
  });

  return <div />;
}
