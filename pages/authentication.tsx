import { useContext, useEffect, useState } from 'react'
import SignIn from '../components/authentication/SignIn'
import AppProvider from '../context/AppProvider';
import PageProvider from '../shared/PageProvider';
import AuthenticationComponent from '../shared/components/Authentication'
import useIsMounted from '../shared/hooks/useIsMounted';
import { Auth } from "aws-amplify";

const Authentication = () => {

    const [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false);

    const isMounted = useIsMounted();
    useEffect(() => {
        //@ts-ignore
        if (isMounted.current) {
            (async () => {
                const loggedIn = await Auth.currentUserInfo();
                console.log("KAPPA", loggedIn, Boolean(loggedIn));
                setIsCurrentlyLoggedIn(Boolean(loggedIn));
            })()
        }
    }, [])

    return <>
        <AppProvider>
            <PageProvider>
                <AuthenticationComponent />
            </PageProvider>
        </AppProvider>
    </>
}

export default Authentication;