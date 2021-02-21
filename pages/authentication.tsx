import { useContext } from 'react'
import SignIn from '../components/authentication/SignIn'
import AppProvider from '../context/AppProvider';
import PageProvider from '../shared/PageProvider';
import { authState, authState as authStateConstant } from '../shared/constant';
import Admin from '../layouts/Admin'
import Signup from '../components/authentication/Signup';
import ConfirmationCode from '../components/authentication/ConfirmationCode';
import ForgotPassword from '../components/authentication/ForgotPassword';
import PasswordReset from '../components/authentication/PasswordReset';
import Dashboard from './dashboard';
import AppContext from '../context/AppContext';
import AuthenticationComponent from '../shared/components/Authentication'

const Authentication = () => {

    return <>
        <AppProvider>
            <PageProvider>
                <AuthenticationComponent />
            </PageProvider>
        </AppProvider>
    </>
}

export default Authentication;