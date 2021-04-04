import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { dashboardColor } from '../constant';
import FacetDivider from './FacetDivider';

const ParentDiv = styled.div`
`;

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
`

const ArrowDiv = styled.div`
    justify-content: center;
    align-content: center;
    display: grid;
    background-color: ${dashboardColor.bgGray};
    border-radius: 0px 12px 12px 0px;
`;

const DropdownDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 20% 50%;
    justify-content: center;
    align-items: center;
`;

const FacetDropdown = ({ options = [] }) => {

    const [currentSelect, setCurrentSelect] = React.useState(options && options[0] || '');
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const optionsSelection = <div>
        {options.map(e => {
            return <div>
                {e}
            </div>
        })}
    </div>

    return <>
        <DropdownDiv>
            <div>
                <FacetDivider color={dashboardColor.darkGreen} />
            </div>
            <ParentDiv>
                <MainDiv onClick={() => handleClick()}>
                    <div style={{
                        backgroundColor: dashboardColor.darkGreen,
                        borderRadius: '90px 0 0 90px'
                    }}>
                        {currentSelect}
                    </div>
                    <ArrowDiv>
                        <KeyboardArrowDownIcon />
                    </ArrowDiv>
                </MainDiv>
                {isOpen ? optionsSelection : null}
            </ParentDiv>
            <div><FacetDivider /></div>
        </DropdownDiv>
    </>
}

export default FacetDropdown;