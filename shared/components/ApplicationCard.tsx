import React, { useState } from 'react'
import styled from 'styled-components'
import { dashboardColor, color, applicationStack } from '../constant'
import FacetLabel from './FacetLabel'
import Icon from '../components/Icon'
import FacetIconButton from './FacetIconButton'

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

const StyledA = styled.a`

`;

const ApplicationCard = ({ name, favorite = false, appStack = applicationStack.java, isAuthorized = true, href = '' }) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    return <>
        <MainGrid>
            <TitleGrid>
                <StyledA href={href}>
                    <FacetLabel extraStyle={{ fontWeight: 'bold' }} text={name} />
                </StyledA>
                <div style={{
                    justifySelf: 'end'
                }}>
                    <FacetIconButton
                        key={name + isFavorite}
                        onClick={() => { setIsFavorite(!isFavorite) }}
                        name={isFavorite ? 'star' : 'star-outline'} />
                </div>
            </TitleGrid>
            <StyledA href={href}>
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
            </StyledA>
        </MainGrid>
    </>
}

export default ApplicationCard;