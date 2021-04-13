import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';
import { getApp, postApp } from '../../services/facetApiService';
import ParserBackendService from '../../services/ParserBackendService';
import { dashboardColor } from '../constant';
import FacetInput, { secondaryColor } from './FacetInput';
import { Auth } from "aws-amplify";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25rem 25rem 25rem;
    gap: 2rem;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 8rem 8rem;
`

const LightGrayDiv = styled.div`
    color: white;
`

const DarkGrayDiv = styled.div`
    color: ${dashboardColor.darkGray};
`

const PanelDiv = styled.div`
    background-color: ${dashboardColor.darkGray2};
    padding: 1rem;
    height: 6rem;
`

const StyledA = styled.a`
    cursor: pointer;
`;

const AppIdTopPanel = () => {
    const { apiKey, appId, authObject } = useContext(AppContext);
    const [edditingDescription, setEdditingDescription] = useState(false);
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState('');
    useEffect(() => {
        (async () => {
            let authenticatedUser = await Auth.currentAuthenticatedUser();
            setCreator(authenticatedUser?.attributes?.email);
            const getAppResponse = await getApp(apiKey);
            const wantedApp = ParserBackendService.getAppByName(appId, getAppResponse);
            const descr = ParserBackendService.getDescription(wantedApp);
            setDescription(descr);
        })();
    }, []);

    return <>
        <Grid>
            <div>
                <>
                    <div style={{
                        display: 'grid'
                    }}>
                        <PanelDiv>
                            <Row>
                                <DarkGrayDiv>
                                    Name:
                                 </DarkGrayDiv>
                                <LightGrayDiv>
                                    {appId}
                                </LightGrayDiv>
                            </Row>
                            <Row>
                                <DarkGrayDiv>
                                    Creator:
                                </DarkGrayDiv>
                                <LightGrayDiv>
                                    {creator}
                                </LightGrayDiv>
                            </Row>
                        </PanelDiv>
                    </div>
                </>

            </div>

            <div>
                <PanelDiv>
                    <DarkGrayDiv>
                        Description
                </DarkGrayDiv>
                    <LightGrayDiv>
                        <FacetInput colorStyle={secondaryColor} maxLength="10"
                            disabled={!edditingDescription} value={description}
                            placeholder='Add description here' onChange={(e) => {
                                setDescription(e.target.value);
                            }} />
                    </LightGrayDiv>
                </PanelDiv>
                <div style={{
                    textAlign: 'end'
                }}>
                    {
                        !edditingDescription ?
                            <StyledA onClick={async () => {
                                setEdditingDescription(!edditingDescription);
                            }}>
                                Edit
                        </StyledA>
                            : <>
                                <StyledA onClick={async () => {
                                    setEdditingDescription(!edditingDescription);
                                    const getAppResponse = await getApp(apiKey);
                                    let wantedApp = ParserBackendService.getAppByName(appId, getAppResponse);
                                    wantedApp.attribute = {
                                        description
                                    }
                                    const ff = await postApp(wantedApp, apiKey);
                                }}>
                                    Done
                                </StyledA>
                            </>
                    }
                </div>
            </div>
            <div>
                <PanelDiv>
                    <DarkGrayDiv>
                        <span>
                            Frameworks
                    </span>
                    </DarkGrayDiv>
                    <div>
                        <div>
                            <img style={{
                                marginTop: '.5rem'
                            }} width="40" height="40" src={`../../images/java.svg`} alt='java.svg' />
                        </div>
                    </div>
                </PanelDiv>
            </div>

        </Grid>
    </>
}

export default AppIdTopPanel;