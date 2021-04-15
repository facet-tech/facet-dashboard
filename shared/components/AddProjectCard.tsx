import React from 'react'
import styled from 'styled-components'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import AppContext from '../../context/AppContext'
import AddApplicationModal from './AddApplicationModal'
import { Link } from '@material-ui/core'
import { useRouter } from 'next/router'

const MainGrid = styled.div`
    display: grid;
    width: 21.8rem;
    height: 11rem;
    border: 1px dashed #666666;
    box-sizing: border-box;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const AddProjectCard = () => {
    const router = useRouter()

    return <>
        <div onClick={() => { router.push('/documentation', undefined, { shallow: true }) }}>
            <MainGrid  >
                <div>
                    <AddCircleRoundedIcon style={{ fontSize: 40 }} />
                </div>
            </MainGrid>
            <AddApplicationModal />
        </div>
    </>
}


export default AddProjectCard;