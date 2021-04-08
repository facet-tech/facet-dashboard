import React from 'react'
import styled from 'styled-components'
import ParserBackendService from '../../../services/ParserBackendService'
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
                    <FacetLabel width="60rem" color={color.grayB4} text={`Parameters: ${ParserBackendService.parseParameters(parameter)}`} />
                </div>
                <div>
                    {parameter?.map(e => {
                        return <StyledDiv>
                            <div>
                                <FacetLabel color={color.grayB4} text="Name:" />
                            </div>
                            <div>
                                <FacetLabel color={color.grayB4} text={e.type} />
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