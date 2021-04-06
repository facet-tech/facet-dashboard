import React from 'react'
import styled from 'styled-components'
import { color } from '../../constant'
import FacetLabel from '../FacetLabel'

const StyledDiv = styled.div`
    display: grid;
    gap: 2%;
    grid-template-columns: 45% 45%;
`

const FunctionCard = ({ parameter, returnType, signature }) => {
    return <>
        <div>
            <div>
                <div>
                    <FacetLabel color={color.grayB4} text={`Parameter: ${parameter}`} />
                </div>
                <div>
                    {/* <FacetLabel text={parameter} /> */}
                    {parameter?.map(e => {
                        return <StyledDiv>
                            <div>
                                <FacetLabel color={color.grayB4} text="Name:" />
                            </div>
                            <div>
                                <FacetLabel color={color.grayB4} text={e.name} />
                            </div>
                        </StyledDiv>
                    })}
                </div>
            </div>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.grayB4} text="Return Type: " />
                </div>
                <div>
                    <FacetLabel color={color.grayB4} text={returnType} />
                </div>
            </StyledDiv>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.grayB4} text="Signature: " />
                </div>
                <div>
                    <FacetLabel color={color.grayB4} text={signature} />
                </div>
            </StyledDiv>
        </div>
    </>
}

export default FunctionCard;