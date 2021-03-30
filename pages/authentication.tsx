import { useContext, useEffect, useState } from 'react'
import AppProvider from '../context/AppProvider';
import AuthenticationComponent from '../shared/components/Authentication'
import useIsMounted from '../shared/hooks/useIsMounted';
import { Auth, Hub } from "aws-amplify";

function Authentication() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser().then(userData => setUser(userData));
                    break;
                case 'signOut':
                    setUser(null);
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
            }
        });

        getUser().then(userData => setUser(userData));
    }, []);

    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then(userData => userData)
            .catch(() => console.log('Not signed in'));
    }

    return (
        <div>
            <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
            {user ? (
                <button onClick={() => Auth.signOut()}>Sign Out</button>
            ) : (
                <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
            )}
        </div>
    );
}

export default Authentication;