import { useState } from 'react';
import { allFacets, color } from '../constant';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from './FacetSnackbar';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {

    const [hiddenFacets, setHiddenFacets] = useState([allFacets.facet1]);
    const [currentPage, setCurrentPage] = useState();
    const [estimatedCost, setEstimatedCost] = useState('$ 0.00');

    const pricingTier = [
        {
            name: 'First 1 Thousand',
            cost: 0,
            costText: 'free',
            limit: 1000
        }
        ,
        {
            name: 'Next 20 Thousand',
            cost: 0.005,
            costText: '$0.005 per request',
            limit: 20000
        }
        ,
        {
            name: 'Next 100 Thousand',
            cost: 0.001,
            costText: '$0.001 per request',
            limit: 100000
        }
        ,
        {
            name: 'Next 5 Million',
            cost: 0.0002,
            costText: '$0.0002 per request',
            limit: 9999999999999999999999999999999999999999999999999999999999999,
        },
        {
            name: 'Enterprise',
        },
        {
            name: 'Self Hosted',
            cost: 0,
            limit: 1000000000,
        }
    ]

    const calculate = (numberOfRequests) => {
        let enterpriseLimit = 1200
        let remainingRequests = numberOfRequests;
        let price = 0
        for (let i = 0; i < pricingTier.length && remainingRequests > 0 ;  i++) {
            let limit = pricingTier[i].limit
            let rate = pricingTier[i].cost
            if (remainingRequests > limit && i < pricingTier.length - 1) {
                price += limit * rate
                remainingRequests -= limit;
            } else {
                price += remainingRequests * rate
                remainingRequests = 0
            }
        }
        if(price <= enterpriseLimit) {
            return `$ ${price.toFixed(2)}`
        } else {
            return `Enterprise`
        }
        return price
    }

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets, currentPage, setCurrentPage,
        estimatedCost, setEstimatedCost, calculate, pricingTier
    }}>
        {/* @ts-ignore */}
        <SnackbarProvider
            style={{ height: '100%' }}
            maxSnack={4}
            disableWindowBlurListener
            autoHideDuration={snackbarConfig.autoHideDuration}
            iconVariant={{
                error: '✖️',
                warning: '⚠️',
            }}
            anchorOrigin={{
                vertical: snackbarConfig.vertical,
                horizontal: snackbarConfig.horizontal,
            }}
            content={(key, message) => (
                //@ts-ignore
                <FacetSnackbar id={key} {...message} />
            )}>
            {children}
        </SnackbarProvider>
    </AppContext.Provider >
}


