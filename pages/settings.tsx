import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getConfigurationResponse, getDefaultConfiguration, updateConfiguration } from '../services/facetApiService.js';
import styled from 'styled-components';
import { color, fontSize, snackbar } from '../shared/constant';
import FacetLabel from '../shared/components/FacetLabel';
import FacetIconButton from '../shared/components/FacetIconButton';
import FacetInput from '../shared/components/FacetInput';
import FacetButton from '../shared/components/FacetButton';
import { useSnackbar } from 'notistack';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 30px 100px; 
    grid-column-gap: 2px;
    align-items: center;
    height: 2rem;
`;

const AsideDiv = styled.div`
    display: grid;
    grid-template-columns: 10rem .5rem; 
    grid-column-gap: 0.1rem;
    align-items: center;
    margin-top: 1rem;
    margin-bottom:1rem;
`;

const Backend = () => {
    const { apiKey } = useContext(AppContext);
    const [signature, setSignature] = useState([]);
    const [requestResponse, setRequestResponse] = useState({});
    const [addedListItem, setAddedListItem] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        (async () => {
            const configurationResponse = await getConfigurationResponse(apiKey);
            setRequestResponse(configurationResponse.response);
            setSignature(configurationResponse?.response?.attribute?.signature);
        })();
    }, []);
    return <div style={{
        overflow: 'hidden'
    }}>
        <AsideDiv>
            <div>
                <FacetLabel fontSize={fontSize.xxLarge} text="Block List" />
            </div>
            <div>
                <FacetIconButton
                    iconWidth="25"
                    iconHeight="25"
                    title="Delete"
                    fill={color.white}
                    name="refresh-outline"
                    onClick={async () => {
                        const r = confirm("Are you sure you want to reset your block list?");
                        if (r) {
                            const defaultConfiguration = await getDefaultConfiguration(apiKey);
                            const signatureList = defaultConfiguration?.response?.attribute?.signature;

                            // @ts-ignore
                            requestResponse.attribute.signature = signatureList;
                            updateConfiguration(requestResponse);

                            setSignature(signatureList);
                            enqueueSnackbar({
                                message: `Reset block-list to default`,
                                variant: snackbar.success.text
                            });
                        }
                    }}
                />
            </div>
        </AsideDiv>

        <AsideDiv>
            <div>
                <FacetInput value={addedListItem} onChange={(e) => { setAddedListItem(e.target.value) }} />
            </div>
            <div style={{
                marginLeft: '1rem'
            }}>
                <FacetButton onClick={() => {
                    signature.push(addedListItem)
                    //@ts-ignore
                    requestResponse.attribute.signature = signature;
                    updateConfiguration(requestResponse, apiKey);
                    // @ts-ignore
                    setSignature(signature);
                    setAddedListItem('')
                }} style={{ width: "2rem", height: "2rem" }} text="add" />
            </div>
        </AsideDiv>

        {/* @ts-ignore */}
        {signature && signature?.map((e, index) => {
            return <StyledDiv>
                <FacetIconButton
                    iconWidth="25"
                    iconHeight="25"
                    title="Delete"
                    fill={color.redError}
                    name="minus-outline"
                    onClick={() => {
                        const newList = signature.filter(item => item !== e);
                        //@ts-ignore
                        requestResponse.attribute.signature = newList;
                        updateConfiguration(requestResponse, apiKey);
                        setSignature(newList);
                    }}
                />
                <FacetLabel text={e} />
            </StyledDiv>
        })}
        {/* get around weird bug */}
        <div style={{
            marginTop: '1rem'
        }}></div>

    </div>
}

Backend.layout = Admin;
export default Backend;