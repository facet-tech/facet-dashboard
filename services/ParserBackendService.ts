type SignatureParameter = {
    name: string,
    type: string
}

type Signature = {
    enabled: boolean,
    name: string,
    parameter: SignatureParameter[],
    returnType: string,
    signature: string
}

type ParsedObject = {
    appId: string,
    fullyQualifiedName: string,
    interfaceSignature?: string[],
    language: {
        name: string,
        version: string
    },
    parentSignature: string,
    signature: Signature,
    type: string,
    version: string
}

class ParserBackendService {

    /**
     * 
     * @param getBackendFacetsResponse 
     * 
     * @returns {ParsedObject}
     */
    static ParseBackendResponse = (getBackendFacetsResponse) => {
        console.log('@getBackendFacetsResponse', getBackendFacetsResponse)
        let resultMap = new Map();
        getBackendFacetsResponse?.response?.forEach(appElement => {
            console.log('appElement', appElement)
            const { appId } = appElement;
            const mapEntry = resultMap.get(appId) || [];
            mapEntry.push(appElement);
            resultMap.set(appId, mapEntry);
        });
        return Array.from(resultMap, ([name, value]) => ({ name, value }));;
    }
}

export default ParserBackendService;