import React from 'react'
import StyledGreyButton from '@/components/common/Buttons/GreyButton/style'

export const GreyButton = ({ children, ...props }) => {
    return <StyledGreyButton {...props}>{children}</StyledGreyButton>
}
