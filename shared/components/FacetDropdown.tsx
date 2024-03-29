import React from 'react';
import styled from 'styled-components';
import { dashboardColor } from '../constant';
import FacetDivider from './FacetDivider';
import Select from 'react-select';
import chroma from 'chroma-js';

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
`

const DropdownDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 50%;
    justify-content: center;
    align-items: center;
`;

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(dashboardColor.purple);
        return {
            ...styles,
            // backgroundColor: isDisabled
            //     ? null
            //     : isSelected
            //         ? data.color
            //         : isFocused
            //             ? color.alpha(0.1).css()
            //             : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    input: styles => ({ ...styles }),
    placeholder: styles => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles }),
};

const FacetDropdown = ({ options = [] }) => {

    const [currentSelect, setCurrentSelect] = React.useState(options && options[0] || '');

    const handleChange = selectedOption => {
        setCurrentSelect(selectedOption);
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
                <FacetDivider color={dashboardColor.purple} />
            </div>
            <div>
                <MainDiv>
                    <Select
                        value={currentSelect}
                        onChange={handleChange}
                        options={options}
                        styles={colourStyles}
                    />
                </MainDiv>
            </div>
            <div>
                <FacetDivider color={dashboardColor.purple} />
            </div>
        </DropdownDiv>
    </>
}

export default FacetDropdown;