import isDevelopment from "../utils/isDevelopment";

const color = {
    electricA: '#5979D9',
    electricB: '#758EBF',
    ice: '#C4DDF2',
    darkIce: '#3C455B',
    lightGray: '#8B8E93',
    grayA: '#4A4E59',
    grayB: '#BABABA',
    grayB2: '#272D37',
    grayB3: '#23262D',
    grayB4: '#C4C4C4',
    darkGray: '#181D26',
    darkestGray: '#13171E',
    black: '#000000',
    redError: '#CD0F11',
    menuDivider: '#696969',
    white: '#FFFFFF',
    facetBlue: '#4AACFF',
    menuColor: {
        red: '#ED4D4D',
        lightGreen: '#8EB914',
        lightBlue: '#23E7DB',
        lightPurple: '#927EE2',
        green: '#00D222'
    },
    skyBlue: '#C4DDF2',
    darkBlue: '#292E36',
    green: '#33DDB4',
    darkGreen: '#33DD00',
    darkerGreen: '#33FF12',
    pricingBlack: '#1E232B',
    pricingGray: '#F9F9F9',
    pricingLightGray: '#1D242E',
    pricingDivDark: '#212934',
    primary: '#9D1757',
    primaryGray: "#9D989E",
    secondaryGray: '#F3F3F3',
    paragraph: '#494949',
    iconBtnGray: '#CBCBCB',
    sidebarGray: '#717171',
    blackDashboard: '#111111',
    dashboardGray: '#CDCFD0',
};

const dashboardColor = {
    ice: '#E8F2FC',
    gray: '#2A2A2A',
    black: '#181818',
    green: '#B3E07A',
    cyan: '#80CAE1',
    lightGray: '#CCCCCC',
    darkGray: '#656565',
    darkGreen: '#57827A',
    bgGray: '#373737',
    purple: '#949BDC',
    darkGray2: '#161618',
};

const applicationStack = {
    java: {
        name: 'java',
        imgName: 'java.svg'
    },
    javascript: {
        name: 'javascript',
        imgName: 'javascript.svg'
    }
}

const mountainWalkColors = {
    gray: '#262626',
};

const ChromeRequestType = {
    GET_LOGGED_IN_USER: 'GET_LOGGED_IN_USER',
    OPEN_WELCOME_PAGE: 'OPEN_WELCOME_PAGE',
    OPEN_PREVIEW_PAGE: 'OPEN_PREVIEW_PAGE',
    GET_CURRENT_TAB: 'GET_CURRENT_TAB',
    SET_COOKIE_VALUE: 'SET_COOKIE_VALUE'
};

const apiBaseURL = 'https://api.facet.run';
const testBaseURL = 'https://test.api.facet.run';
const localBaseURL = 'http://localhost:3002';
const websiteURL = 'https://facet.run';

const authState = {
    initialAuth: 'INITIAL_AUTH',
    notSignedIn: 'NOT_LOGGED_IN',
    signedIn: 'LOGGED_IN',
    signingIn: 'SIGNING_IN',
    signUp: 'SIGN_UP',
    signingUp: 'SIGNING_UP',
    confirmingSignup: 'CONFIRMING_SIGNUP',
    onForgotPassword: 'FORGOT_PASSWORD',
    onPasswordReset: 'PASSWORD_RESET'
};

const snackbar = {
    success: {
        text: 'success',
        iconName: 'checkmark-circle-2-outline',
        fill: 'green'
    },
    error: {
        text: 'error',
        iconName: 'alert-circle-outline',
        fill: color.redError
    },
    info: {
        text: 'info',
        iconName: 'message-circle-outline',
        fill: color.white
    }
};

const APIEndpoint = {
    restController: 'org.springframework.web.bind.annotation.RestController',
    controller: 'org.springframework.stereotype.Controller',
    requestMapping: 'org.springframework.web.bind.annotation.RequestMapping'
};

const documentationIds = {
    download: 'facet-download',
    install: 'install',
    facetTitle: 'documentation-facet-title',
    facetDeclaration: 'documentation-facet-declaration',
    holdOffRollOut: 'documentation-hold-off-rollout',
    addDomainToWorkspace: 'add-domain-to-workspace',
    oneLineCodeIntegration: 'documentation-one-line-code-integration',
    preview: 'preview',
    faq: 'documentation-faq'
}

const documentationText = {
    download: 'Download',
    install: 'Install',
    facetTitle: 'Introduction',
    addDomainToWorkspace: 'Domain',
    facetDeclaration: 'Declaration',
    holdOffRollOut: 'Rollout',
    preview: 'Preview',
    oneLineCodeIntegration: 'Integration',
    faq: 'FAQ'
}

const fontSize = {
    xxSmall: 'xx-small',
    xSmall: 'x-small',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xLarge: 'x-large',
    xxLarge: 'xx-large',
    xxxLarge: 'xxx-large'
};

const allFacets = {
    facet1: 'Facet-Logo',
    facet2: 'Facet-Menu',
    facet3: 'Facet-Label',
    facet4: 'Facet-Search',
    facet5: 'Facet-Content'
};

const responsiveThresholds = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    xxLarge: '(min-width: 1564px)',
    upperTH: '(min-width: 1024px)',
}

const isMobile = (threshHoldValue = responsiveThresholds.sm) => {
    return threshHoldValue === responsiveThresholds.xs || threshHoldValue === responsiveThresholds.sm;
}

const isMobileLg = (threshHoldValue) => {
    return threshHoldValue === responsiveThresholds.xs || threshHoldValue === responsiveThresholds.sm || threshHoldValue === responsiveThresholds.md;
}

const HTTPMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const api = {
    domainId: 'domainId',
    workspace: {
        workspaceId: 'workspaceId'
    },
    facetObjectVersion: '0.0.1'// TODO ideally this matches the manifest version
};

const APIUrl = {
    apiBaseURL,
    testBaseURL,
    localBaseURL,
    activeBaseURL: isDevelopment() ? apiBaseURL : apiBaseURL,
    websiteURL
};


export {
    color, fontSize, allFacets, mountainWalkColors, documentationIds, authState,
    APIUrl, apiBaseURL, snackbar, documentationText, responsiveThresholds, dashboardColor,
    isMobile, isMobileLg, api, HTTPMethods, ChromeRequestType, APIEndpoint, applicationStack
};
