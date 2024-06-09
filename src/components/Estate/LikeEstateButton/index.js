import StyledLikeEstateButton from '@/components/Estate/LikeEstateButton/style'
import { toggleEstateFavourite } from '@/lib/helper'
import { HeartOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

export const LikeEstateButton = ({ estate }) => {
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        const favEstates = JSON.parse(localStorage.getItem('favEstates')) || []
        setIsFav(favEstates.includes(estate.id))
    }, [estate.id])

    const handleClick = () => {
        const updatedCompareEstates = toggleEstateFavourite(estate)
        setIsFav(updatedCompareEstates.includes(estate.id))
    }

    return (
        <StyledLikeEstateButton onClick={handleClick}>
            <HeartOutlined
                style={{ fontSize: 20, color: isFav ? '#d8002c' : 'gray' }}
            />
        </StyledLikeEstateButton>
    )
}
