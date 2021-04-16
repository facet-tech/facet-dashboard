import { APIEndpoint, HTTPMethods } from "../shared/constant";
import { getFramework } from "./facetApiService";

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

    static getPathName = (annotationArr, frameworkResponse) => {
        const frameworkClassnames = ParserBackendService.getSensorClassnames(frameworkResponse);
        const obj = annotationArr?.find(e => frameworkClassnames.includes(e.className));
        if (!obj || obj?.parameters?.length === 0) {
            return '';
        }
        const param = obj?.parameters?.find(paramObj => paramObj.name === 'value');
        return param?.value?.replace(/[{}]/g, '').replace(/[""]/g, '').trim();
    }

    static containsEndpoints = (annotationArr) => {
        return annotationArr?.some(e => e.className === APIEndpoint.restController || e.className === APIEndpoint.controller);
    }

    static getEndpointType = (annotationArr, frameworkResponse) => {
        const frameworkClassnames = ParserBackendService.getSensorClassnames(frameworkResponse);
        let obj = annotationArr?.find(e => e.className === APIEndpoint.requestMapping && e?.parameters?.some(paramObj => paramObj.name === 'method'))
        if (!obj || obj?.parameters?.length === 0) {
            obj = annotationArr?.find(e => frameworkClassnames.includes(e.className));
            if (!obj || obj.lenth === 0) {
                return undefined;
            }
            return ParserBackendService.getParamType(obj?.className);
        } else {
            const param = obj?.parameters?.find(paramObj => paramObj.name === 'method');
            return ParserBackendService.getParamType(param?.value);
        }
    }

    static getParamType = (param) => {
        const typeStr = param?.replace(/[{}]/g, '').replace(/[""]/g, '').trim();
        if (typeStr?.toLowerCase()?.includes(HTTPMethods.GET.toLocaleLowerCase())) {
            return HTTPMethods.GET;
        } else if (typeStr?.toLowerCase()?.includes(HTTPMethods.POST.toLocaleLowerCase())) {
            return HTTPMethods.POST;
        } else if (typeStr?.toLowerCase()?.includes(HTTPMethods.DELETE.toLocaleLowerCase())) {
            return HTTPMethods.DELETE;
        } else if (typeStr?.toLowerCase()?.includes(HTTPMethods.PUT.toLocaleLowerCase())) {
            return HTTPMethods.PUT;
        }
        return undefined;
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

    static getSensorClassnames = (frameworkResponse) => {
        const sensors = frameworkResponse?.response?.attribute?.sensors;
        if (!sensors || sensors.length === 0) {
            return [];
        }
        const classNames = sensors[0]?.annotations?.map(e => e.className)
        return classNames
    }

}

export default ParserBackendService;