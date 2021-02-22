import { Auth } from 'aws-amplify';

const isUserLoggedIn = async () => {
    const loggedIn = await Auth.currentUserInfo();
    const loggedInVal = Boolean(loggedIn);
    return loggedInVal;
}

export default isUserLoggedIn;