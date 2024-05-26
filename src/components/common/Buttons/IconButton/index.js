import React from 'react'
import StyledIconButton from '@/components/common/Buttons/IconButton/style'

export const IconButton = ({ children, ...props }) => {
    return <StyledIconButton {...props}>{children}</StyledIconButton>
}
