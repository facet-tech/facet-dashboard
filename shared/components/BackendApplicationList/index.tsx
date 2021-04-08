import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ApplicationCard from '../ApplicationCard';
import styled from 'styled-components';
import FacetParagraph from '../FacetParagraph';
import { color, dashboardColor, snackbar } from '../../constant';
import FacetIcon from '../Icon';
import FacetIconButton from '../FacetIconButton';
import AddProjectCard from '../AddProjectCard';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 22rem 22rem 22rem;
    grid-gap: 1rem;
    overflow: hidden;
    margin-top: 2rem;
`;


const StyledGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
`

const BackendApplicationList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { backendFacetNames, apiKey, workspaceId } = useContext(AppContext);
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
        <Grid>
            {backendFacetNames?.map(backendFacet => {
                return <>
                    <ApplicationCard name={backendFacet} href={`applications/${backendFacet}/`} />
                </>
            })}
            <AddProjectCard />
        </Grid>
    </>
}

export default BackendApplicationList;