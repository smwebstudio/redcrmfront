import StyledLikeEstateButton from '@/components/Estate/LikeEstateButton/style'
import { toggleEstateComparison } from '@/lib/helper'
import { HeartOutlined } from '@ant-design/icons'
import React from 'react'

export const LikeEstateButton = ({ estate }) => {
    return (
        <StyledLikeEstateButton onClick={() => toggleEstateComparison(estate)}>
            <HeartOutlined style={{ fontSize: 24 }} />
        </StyledLikeEstateButton>
    )
}
