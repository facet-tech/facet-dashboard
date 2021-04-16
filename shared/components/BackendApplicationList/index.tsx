import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ApplicationCard from '../ApplicationCard';
import styled from 'styled-components';
import FacetParagraph from '../FacetParagraph';
import { color, dashboardColor, snackbar } from '../../constant';
import FacetIconButton from '../FacetIconButton';
import AddProjectCard from '../AddProjectCard';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';
import { getApp } from '../../../services/facetApiService';
import ParserBackendService from '../../../services/ParserBackendService';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 22rem 22rem 22rem;
    grid-gap: 1rem;
    overflow: hidden;
    margin-top: 2rem;
`;

const BackendApplicationList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { backendFacetNames, retreiveApiKey, apiKey, workspaceId, setGetAppResponse, setBackendFacetNames, setFavoriteList } = useContext(AppContext);
    return <>
        <FacetParagraph width='unset' color={color.grayB}>
            <b>APIKey:{' '}</b>
        </FacetParagraph>
        <FacetParagraph width='unset' color={color.grayB}>
            {apiKey}
            <CopyToClipboard text={apiKey}>
                <FacetIconButton hoverColor={color.skyBlue} fill={color.skyBlue} onClick={() => {
                    enqueueSnackbar({
                        message: `Copied API_KEY to clipboard!`,
                        variant: snackbar.success.text
                    });
                }} customHeight="1.2rem" name="clipboard" />
            </CopyToClipboard>
        </FacetParagraph>
        <br />
        <FacetParagraph width='unset' color={color.grayB}>
            <b>WorkspaceId:{' '}</b>
        </FacetParagraph>
        <FacetParagraph width='unset' color={color.grayB}>
            {workspaceId}
            <CopyToClipboard text={workspaceId}>
                <FacetIconButton hoverColor={color.skyBlue} fill={color.skyBlue} onClick={() => {
                    enqueueSnackbar({
                        message: `Copied WorkspaceId to clipboard!`,
                        variant: snackbar.success.text
                    });
                }} customHeight="1.2rem" name="clipboard" />
            </CopyToClipboard>
        </FacetParagraph>
        <br />
        <FacetParagraph width='unset' color={color.grayB}>
            Check our <a href='https://facet.run/documentation' target='_blank'>documentation</a> on how to create a new project.
                </FacetParagraph>
        <FacetIconButton onClick={() => {
            window.open('https://facet.run/documentation', '_blank');
        }} fill={dashboardColor.cyan} name='external-link-outline' />
        <br />
        <>
            <FacetIconButton onClick={async () => {
                const key = await retreiveApiKey();
                const getAppResponse = await getApp(key);
                setGetAppResponse(getAppResponse);
                const backendFacetNames = getAppResponse?.response?.map(e => e?.name);
                setBackendFacetNames(backendFacetNames);
                const favoriteList = ParserBackendService.getFavoriteApps(getAppResponse);
                setFavoriteList(favoriteList);
            }} fill={dashboardColor.cyan} name='refresh' />
            <Grid>
                {backendFacetNames?.map(backendFacet => {
                    return <>
                        <ApplicationCard name={backendFacet} href={`applications/${backendFacet}/`} />
                    </>
                })}
                <AddProjectCard />
            </Grid>
        </>
    </>
}

export default BackendApplicationList;