import { useContext } from 'react';
import SignIn from '../components/authentication/SignIn';
import AppContext from '../context/AppContext';
import AppProvider from '../context/AppProvider';
import FacetFormContainer from './components/FacetFormContainer';


const PageProvider = (children) => {
    const { isUserLoggedIn } = useContext(AppContext);

    const element = isUserLoggedIn ? children : <SignIn />



    return <AppProvider>
        {element}
    </AppProvider>
}

export default PageProvider;