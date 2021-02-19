import styled from 'styled-components'

const StyledDiv = styled.div`
    display: grid;
    text-align: center;
`

export default function BlogGrid() {
    return (<>
        <StyledDiv>
            <h3 style={{ color: 'white' }}>Thanks for checking us out! Our blog is currently under construction. <br />🚧 Coming soon!</h3>
            <h3 style={{ color: 'white' }}> </h3>
        </StyledDiv>
    </>
    )
}