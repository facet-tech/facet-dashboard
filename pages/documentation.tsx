import React from 'react';
import Admin from '../layouts/Admin';
import AddApplication from '../shared/components/AddApplication';
import styled from 'styled-components';

const Documentation = () => {

    const Container = styled.div`
        margin: 1rem;
    `

    return <Container>
        <AddApplication />
    </Container>
}

Documentation.layout = Admin;
export default Documentation;