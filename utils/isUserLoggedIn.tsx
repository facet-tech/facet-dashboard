import { Auth } from 'aws-amplify';

const isUserLoggedIn = async () => {
    // const loggedIn = await Auth.currentUserInfo();
    // const loggedInVal = Boolean(loggedIn);
    // return loggedInVal;
    const loggedIn = await Auth.currentAuthenticatedUser()
        .then(user => {
            console.log("BIKA1")
            console.log({ user });
            return true;
        })
        .catch(err => {
            console.log("BIKA2")
            console.log(err);
            return false;
        });
    return Boolean(loggedIn);
}

export default isUserLoggedIn;