import React from 'react'
import StyledFilterSelect from '@/components/common/Selects/FilterSelect/style'

export const FilterSelect = ({ children, ...props }) => {
    return <StyledFilterSelect {...props}>{children}</StyledFilterSelect>
}
