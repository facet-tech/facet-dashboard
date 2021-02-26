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
                                Name:
                            </div>
                            <div>
                                {e.name}
                            </div>
                        </StyledDiv>
                    })}
                </div>
            </div>
            <div>
                <div>
                    <FacetLabel text="Return Type: " />
                </div>
                <div>
                    <FacetLabel text={returnType} />
                </div>
            </div>
            <div>
                <div>
                    <FacetLabel text="Signature: " />
                </div>
                <div>
                    <FacetLabel text={signature} />
                </div>
            </div>
        </div>
    </>
}

export default FunctionCard;