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
                    <FacetLabel color={color.black} text={`Parameter: ${parameter}`} />
                </div>
                <div>
                    {/* <FacetLabel text={parameter} /> */}
                    {parameter?.map(e => {
                        return <StyledDiv>
                            <div>
                                <FacetLabel color={color.black} text="Name:" />
                            </div>
                            <div>
                                <FacetLabel color={color.black} text={e.name} />
                            </div>
                        </StyledDiv>
                    })}
                </div>
            </div>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.black} text="Return Type: " />
                </div>
                <div>
                    <FacetLabel color={color.black} text={returnType} />
                </div>
            </StyledDiv>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.black} text="Signature: " />
                </div>
                <div>
                    <FacetLabel color={color.black} text={signature} />
                </div>
            </StyledDiv>
        </div>
    </>
}

export default FunctionCard;