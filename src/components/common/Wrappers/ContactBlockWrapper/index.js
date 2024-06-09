import React from 'react'
import styled from 'styled-components'

const StyledContactBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    box-shadow: 0px 3px 15px 0px #a6a6a626;
    padding: 24px;
    text-align: center;
    min-height: 120px;
`

const ContactBlockWrapper = ({ children, ...props }) => {
    return (
        <StyledContactBlockWrapper {...props}>
            {children}
        </StyledContactBlockWrapper>
    )
}

export default ContactBlockWrapper
