import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
    }

    @media (min-width: 1280px) {
    }
`

const ContainerFluid = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>
}

export default ContainerFluid
