import { useContext } from 'react';
import SignIn from '../components/authentication/SignIn';
import AppContext from '../context/AppContext';
import AppProvider from '../context/AppProvider';
import Authentication from './components/Authentication';
import FacetFormContainer from './components/FacetFormContainer';


const PageProvider = (children) => {
    const { isUserLoggedIn } = useContext(AppContext);

    const element = isUserLoggedIn ? children : <Authentication />



    return <AppProvider>
        {element}
    </AppProvider>
}

export default PageProvider;