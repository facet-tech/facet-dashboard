import React from "react";
import Router from "next/router";
import { Auth } from 'aws-amplify'
import { Link } from "@material-ui/core";

export default function Index() {

  async function checkUser() {
    return Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("BIKA1")
        console.log({ user });
        return true;
      })
      .catch(err => {
        console.log("BIKA2")
        console.log(err);
        return false;
      })
  }


  React.useEffect(async () => {
    const gg = await checkUser();
    console.log('Gg', gg);
    if (gg) {
      console.log('bika re malaka')
      Router.push("/applications");
    }
    // Router.push("/");
  });

  function signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
        >Sign In with Google</button>
        <button onClick={checkUser}>Check User</button>
        <Link href={`/authentication`}>
          <button>Normal Signin</button>
        </Link>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  )
}


// src/App.js


// import Amplify from 'aws-amplify'
// import config from './aws-exports'

// Amplify.configure(config)


