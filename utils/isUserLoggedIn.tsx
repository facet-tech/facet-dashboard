import { Auth } from 'aws-amplify';

const isUserLoggedIn = async () => {
    const loggedIn = await Auth.currentAuthenticatedUser()
        .then(user => {
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
    return Boolean(loggedIn);
}

export default isUserLoggedIn;