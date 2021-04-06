import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';
import { getApp, postApp } from '../../services/facetApiService';
import ParserBackendService from '../../services/ParserBackendService';
import { dashboardColor } from '../constant';
import FacetInput from './FacetInput';
import FacetLabel from './FacetLabel';
import MultilineFacetInput from './MultilineFacetInput';

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
    const { apiKey, appId } = useContext(AppContext);
    const [edditingDescription, setEdditingDescription] = useState(false);
    const [description, setDescription] = useState('');
    useEffect(() => {
        (async () => {
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
                                    ServiceA
                                </LightGrayDiv>
                            </Row>
                            <Row>
                                <DarkGrayDiv>
                                    Creator:
                                </DarkGrayDiv>
                                <LightGrayDiv>
                                    Johan
                                </LightGrayDiv>
                            </Row>
                            <Row>
                                <DarkGrayDiv>
                                    Date Created:
                                </DarkGrayDiv>
                                <LightGrayDiv>
                                    2020/12/28
                                </LightGrayDiv>
                            </Row>
                            <Row>
                                <DarkGrayDiv>
                                    Date Modified:
                                </DarkGrayDiv>
                                <LightGrayDiv>
                                    Just now
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
                        <FacetInput maxLength="10"
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
                                    setEdditingDescription(false);
                                }} style={{
                                    marginRight: '1rem'
                                }}>
                                    Cancel
                                </StyledA>
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
                            <img width="35" height="35" src={`../../images/java.svg`} alt='java.svg' />
                        </div>
                    </div>
                </PanelDiv>
            </div>

        </Grid>
    </>
}

export default AppIdTopPanel;