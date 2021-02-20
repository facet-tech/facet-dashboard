import 'react'
import SignIn from '../components/authentication/SignIn'
import AppProvider from '../context/AppProvider';
import PageProvider from '../shared/PageProvider';

const Authentication = () => {
    return <>
        <AppProvider>
            <PageProvider>
                <SignIn />
            </PageProvider>
        </AppProvider>
    </>
}

export default Authentication;