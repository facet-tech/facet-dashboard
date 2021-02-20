import { useContext } from 'react'
import SignIn from '../components/authentication/SignIn'
import AppProvider from '../context/AppProvider';
import PageProvider from '../shared/PageProvider';
import { authState, authState as authStateConstant } from '../shared/constant';
import AppContext from '../context/AppContext';
import Admin from '../layouts/Admin'
import Signup from '../components/authentication/Signup';
import ConfirmationCode from '../components/authentication/ConfirmationCode';
import ForgotPassword from '../components/authentication/ForgotPassword';
import PasswordReset from '../components/authentication/PasswordReset';
import Dashboard from './dashboard';

const Authentication = () => {
    const { currAuthState, jwt, setCurrAuthState } = useContext(AppContext);

    let displayElement;
    if (currAuthState === authStateConstant.signedIn) {
        displayElement = <Dashboard />;
    } else if (currAuthState === authStateConstant.signingIn) {
        displayElement = <SignIn />;
    } else if (currAuthState === authStateConstant.signingUp) {
        displayElement = <Signup />;
    } else if (currAuthState === authStateConstant.confirmingSignup) {
        displayElement = <ConfirmationCode />;
    } else if (currAuthState === authStateConstant.onForgotPassword) {
        displayElement = <ForgotPassword />;
    } else if (currAuthState === authStateConstant.onPasswordReset) {
        displayElement = <PasswordReset />;
    } else {
        displayElement = <SignIn />;
    }

    return <>
        <AppProvider>
            <PageProvider>
                <SignIn />
            </PageProvider>
        </AppProvider>
    </>
}

export default Authentication;