import React from 'react'
import StyledRedOutlinedButton from '@/components/common/Buttons/RedOutlinedButton/style'

export const RedOutlinedButton = ({ children, ...props }) => {
    return (
        <StyledRedOutlinedButton {...props}>{children}</StyledRedOutlinedButton>
    )
}
