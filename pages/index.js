import React from "react";
import Router from "next/router";
import { Auth } from 'aws-amplify'

export default function Index() {

  async function checkUser() {
    return Auth.currentAuthenticatedUser()
      .then(user => {
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      })
  }


  React.useEffect(async () => {
    const val = window.location.pathname.slice(0, -1);
    const userExists = await checkUser();
    if (userExists) {
      Router.push("/applications");
    } else if (!val.includes('authentication')) {
      Router.push("/authentication");
    }
  });

  return (
    <div />
  )
}
