'use client'
import React from 'react'
import StyledAdditionalButtonMobile from '@/components/common/Buttons/AdditionalButtonMobile/style'
import AppImage from '@/components/common/Image/AppImage'

export const AdditionalButtonMobile = ({ children, className, ...props }) => {
    return (
        <StyledAdditionalButtonMobile {...props} className={className}>
            <AppImage
                alt={'Red Group'}
                src={'/assets/img/svg/additional-filter.svg'}
                width={'22px'}
                height={'22px'}
            />
        </StyledAdditionalButtonMobile>
    )
}
