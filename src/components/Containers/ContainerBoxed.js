'use client'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 0;

    @media (max-width: 768px) {
        padding: 0 12px;
    }
`

const ContainerBoxed = ({ children, className }) => {
    return (
        <Container className={'container_boxed ' + className}>
            {children}
        </Container>
    )
}

export default ContainerBoxed
