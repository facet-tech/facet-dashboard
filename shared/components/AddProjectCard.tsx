import React from 'react'
import styled from 'styled-components'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import AppContext from '../../context/AppContext'
import AddApplicationModal from './AddApplicationModal'

const MainGrid = styled.div`
    display: grid;
    width: 21.8rem;
    height: 11rem;
    border: 1px dashed #666666;
    box-sizing: border-box;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`



const AddProjectCard = () => {
    const { setOpenModal } = React.useContext(AppContext);

    return <>
        <MainGrid onClick={() => { setOpenModal(true) }}>
            <div>
                <AddCircleRoundedIcon style={{ fontSize: 40 }} />
            </div>
        </MainGrid>
        <AddApplicationModal />
    </>
}


export default AddProjectCard;