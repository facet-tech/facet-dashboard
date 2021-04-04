import styled from 'styled-components';
import { color, dashboardColor } from '../constant';
import FacetLabel from './FacetLabel';

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
    color: ${dashboardColor.lightGray};
`

const DarkGrayDiv = styled.div`
    color: ${dashboardColor.darkGray};
`

const PanelDiv = styled.div`
    background-color: #161618;
    padding: 1rem;
`

const AppIdTopPanel = () => {
    return <>
        <Grid>
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
            <PanelDiv>
                <DarkGrayDiv>
                    Description
                </DarkGrayDiv>
                <LightGrayDiv>
                    <i>
                        <FacetLabel color={dashboardColor.lightGray} text="Add description here" />
                    </i>
                </LightGrayDiv>
            </PanelDiv>
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
        </Grid>
    </>
}

export default AppIdTopPanel;