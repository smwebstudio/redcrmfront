import React from 'react'
import StyledRedButton from '@/components/common/Buttons/RedButton/style'

export const RedButton = ({ children, ...props }) => {
    return <StyledRedButton {...props}>{children}</StyledRedButton>
}
