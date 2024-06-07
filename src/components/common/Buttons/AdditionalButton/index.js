'use client'
import React from 'react'
import StyledAdditionalButton from '@/components/common/Buttons/AdditionalButton/style'
import AppImage from '@/components/common/Image/AppImage'

export const AdditionalButton = ({ children, className, ...props }) => {
    return (
        <StyledAdditionalButton {...props} className={className}>
            <AppImage
                alt={'Red Group'}
                src={'/assets/img/svg/additional-filter.svg'}
            />
            {children}
        </StyledAdditionalButton>
    )
}
