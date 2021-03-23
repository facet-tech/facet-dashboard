import React from 'react'
import styled from 'styled-components'
import { dashboardColor, color, applicationStack } from '../constant'
import FacetLabel from './FacetLabel'
import Icon from '../components/Icon'

const TitleGrid = styled.div`
    color: ${color.white};
    background-color: ${dashboardColor.gray};
    padding: .5rem;
    border-radius: .5rem .5rem 0 0;
`

const MainGrid = styled.div`
    width: 18rem;
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

const ApplicationCard = ({ name, appStack = applicationStack.java, isAuthorized = true, href = '' }) => {
    return <StyledA href={href}>
        <MainGrid>
            <TitleGrid>
                <FacetLabel text={name} />
            </TitleGrid>
            <DescriptionGrid>
                <div>
                    <img src={`../images/${appStack.imgName}`} alt={appStack.name} />
                </div>
            </DescriptionGrid>
            {isAuthorized ? <PermissionGrid>
                <div>
                    <Icon fill={dashboardColor.green} name='checkmark-circle-2-outline' />
                </div>
                <div>
                    <FacetLabel color={dashboardColor.green} text='Authorized' />
                </div>
            </PermissionGrid> : null}
        </MainGrid>
    </StyledA>
}

export default ApplicationCard;