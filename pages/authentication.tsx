import { useContext, useEffect, useState } from 'react'
import AppProvider from '../context/AppProvider';
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
                setIsCurrentlyLoggedIn(Boolean(loggedIn));
            })()
        }
    }, [])

    return <>
        <AppProvider>
            <AuthenticationComponent />
        </AppProvider>
    </>
}

export default Authentication;