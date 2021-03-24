import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { dashboardColor, color, applicationStack } from '../constant'
import FacetLabel from './FacetLabel'
import Icon from '../components/Icon'
import FacetIconButton from './FacetIconButton'
import { postApp } from '../../services/facetApiService'
import ParserBackendService from '../../services/ParserBackendService'
import AppContext from '../../context/AppContext'

const TitleGrid = styled.div`
    display: grid;
    color: ${color.white};
    background-color: ${dashboardColor.gray};
    padding: .5rem;
    border-radius: .5rem .5rem 0 0;
    grid-template-columns: 80% 20%;
    align-items: center;
`

const MainGrid = styled.div`
    width: 22rem;
    :hover {
        transform: scale(1.01);
    }
`

const PermissionGrid = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    padding: .5rem;
    background-color: ${dashboardColor.black};
`

const DescriptionGrid = styled.div`
    padding: 1rem;
    background-color: ${dashboardColor.black};
`

const ApplicationCard = ({ name, favorite = false, appStack = applicationStack.java, isAuthorized = true, href = '' }) => {

    const { getAppResponse } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorite);

    return <>
        <MainGrid>
            <TitleGrid>
                <a href={href}>
                    <FacetLabel extraStyle={{ fontWeight: 'bold' }} text={name} />
                </a>
                <div style={{
                    justifySelf: 'end'
                }}>
                    <FacetIconButton
                        key={name + isFavorite}
                        onClick={() => {
                            let wantedApp = ParserBackendService.getAppByName(name, getAppResponse);
                            wantedApp.Attribute = {
                                favorite: !isFavorite
                            };
                            postApp(wantedApp);
                            console.log('wantedApp', wantedApp);
                            setIsFavorite(!isFavorite);
                        }}
                        name={isFavorite ? 'star' : 'star-outline'} />
                </div>
            </TitleGrid>
            <a href={href}>
                <DescriptionGrid>
                    <div>
                        <img src={`../images/${appStack.imgName}`} alt={appStack.name} />
                    </div>
                </DescriptionGrid>
                {isAuthorized ? <PermissionGrid>
                    <div>
                        <Icon iconHeight='18' iconWidth='18' fill={dashboardColor.green} name='checkmark-circle-2-outline' />
                    </div>
                    <div>
                        <FacetLabel color={dashboardColor.green} text='Authorized' />
                    </div>
                </PermissionGrid> : null}
            </a>
        </MainGrid>
    </>
}

export default ApplicationCard;