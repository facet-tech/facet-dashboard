import { useContext } from 'react'
import SignIn from '../../components/authentication/SignIn'
import AppProvider from '../../context/AppProvider';
import { authState, authState as authStateConstant } from '../../shared/constant';
import Admin from '../../layouts/Admin'
import Signup from '../../components/authentication/Signup';
import ConfirmationCode from '../../components/authentication/ConfirmationCode';
import ForgotPassword from '../../components/authentication/ForgotPassword';
import PasswordReset from '../../components/authentication/PasswordReset';
import AppContext from '../../context/AppContext';
import Dashboard from '../../pages/dashboard';
import { useRouter } from 'next/router';

const Authentication = () => {
    const router = useRouter();
    const { currAuthState } = useContext(AppContext);
    let displayElement;
    if (currAuthState === authStateConstant.signedIn) {
        router.push('/dashboard')
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
        {displayElement}
    </>
}

export default Authentication;