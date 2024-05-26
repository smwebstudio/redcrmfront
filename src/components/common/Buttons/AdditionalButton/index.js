'use client'
import React from 'react'
import StyledAdditionalButton from '@/components/common/Buttons/AdditionalButton/style'

export const AdditionalButton = ({ children, ...props }) => {
    return (
        <StyledAdditionalButton {...props}>{children}</StyledAdditionalButton>
    )
}
