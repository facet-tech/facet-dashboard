import { APIEndpoint, HTTPMethods } from "../shared/constant";

class ParserBackendService {

    /**
     * 
     * @param getBackendFacetsResponse 
     * 
     * @returns {ParsedObject}
     */
    static ParseBackendResponse = (getBackendFacetsResponse) => {
        let resultMap = new Map();
        getBackendFacetsResponse?.response?.forEach(appElement => {
            const { appId } = appElement;
            const mapEntry = resultMap.get(appId) || [];
            mapEntry.push(appElement);
            resultMap.set(appId, mapEntry);
        });
        return Array.from(resultMap, ([name, value]) => ({ name, value }));;
    }

    static getPathName = (annotationArr) => {
        const obj = annotationArr?.find(e => e.className === APIEndpoint.requestMapping);
        if (!obj || obj.length === 0) {
            return '';
        }
        return obj?.parameters?.value?.replace(/[{}]/g, '').replace(/[""]/g, '').trim();
    }

    static containsEndpoints = (annotationArr) => {
        return annotationArr?.some(e => e.className === APIEndpoint.restController);
    }

    static getEndpointType = (annotationArr) => {
        const obj = annotationArr?.find(e => e.className === APIEndpoint.requestMapping && e?.parameters?.some(paramObj => paramObj.name === 'method'))
        if (!obj) {
            return '';
        }
        const param = obj?.parameters?.find(paramObj => paramObj.name === 'method');
        const typeStr = param?.value?.replace(/[{}]/g, '').replace(/[""]/g, '').trim();
        if (typeStr?.includes(HTTPMethods.GET)) {
            return HTTPMethods.GET;
        } else if (typeStr?.includes(HTTPMethods.POST)) {
            return HTTPMethods.POST;
        } else if (typeStr?.includes(HTTPMethods.DELETE)) {
            return HTTPMethods.DELETE;
        } else if (typeStr?.includes(HTTPMethods.PUT)) {
            return HTTPMethods.PUT;
        }
        return undefined
    }

    static getAppByName = (name, getAppResponse) => {
        const wantedApp = getAppResponse?.response?.find(e => e.name === name);
        return wantedApp;
    }

    static getFavoriteApps = (getAppResponse) => {
        const result = getAppResponse?.response?.filter(e => e.attribute?.favorite === true);
        return result?.map(e => e.name);
    }

    static getDescription = (getAppResponse) => {
        const result = getAppResponse?.attribute?.description;
        return result;
    }

    static parseParameters = (parameterArr) => {
        if (!parameterArr || parameterArr.length === 0) {
            return []
        }
        return parameterArr.map(e => {
            return e?.type;
        })
    }
}

export default ParserBackendService;